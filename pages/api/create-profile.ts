import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { countWords } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const createAvatarRecord = async (avatarKey: string) => {
  const { data: storagePublicUrlData, error: storagePublicUrlError } =
    await supabaseInstance.storage.from('avatars').getPublicUrl(avatarKey);

  if (storagePublicUrlError || !storagePublicUrlData) {
    return null;
  }

  const bucketNamesCount = countWords(storagePublicUrlData.publicURL, 'avatars');
  const parsedPublicUrl =
    bucketNamesCount >= 2
      ? storagePublicUrlData.publicURL.replace('/avatars', '')
      : storagePublicUrlData.publicURL;

  const { data: avatarData, error: avatarError } = await supabaseInstance.from('avatars').insert({
    avatar_key: avatarKey,
    avatar_public_url: parsedPublicUrl,
  });

  if (avatarError) {
    return null;
  }

  return avatarData[0].id;
};

const assignWithBulkInsert = async (
  userId: string,
  table: string,
  idColumnName: string,
  arrayOfIds: number[],
) => {
  const recordsToInsert = arrayOfIds.map((_id) => ({ [idColumnName]: _id, profile_id: userId }));

  await supabaseInstance.from(table).delete().eq('profile_id', userId);

  return supabaseInstance.from(table).insert(recordsToInsert);
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const userData = request.body;

  const avatarId = await createAvatarRecord(userData.avatarKey);

  if (!avatarId) {
    return response.status(500).send(EApiError.PROBLEM_WITH_AVATAR_UPLOAD);
  }

  const { error: assignProfilesFocusMarketsError } = await assignWithBulkInsert(
    user.id,
    'profiles_focus_markets',
    'focus_market_id',
    userData.focusMarketIds,
  );

  if (assignProfilesFocusMarketsError) {
    return response.status(500).send(EApiError.PROBILEM_WITH_PROFILES_FOCUS_MARKETS);
  }

  const { data: profilesData, error: profilesError } = await supabaseInstance
    .from('profiles')
    .update({
      avatar_id: avatarId,
      location: userData.location,
      last_name: userData.lastName,
      first_name: userData.firstName,
      company_name: userData.companyName,
      contact_email: userData.contactEmail,
      startup_claim: userData.startupClaim,
      client_type_id: userData.clientTypeId,
      vision_statement: userData.visionStatement,
      mission_statement: userData.missionStatement,
      what_you_are_looking_for: userData.whatYouAreLookingFor,
      investor_profile_type_id: userData.investorProfileTypeId,
      startup_profile_creator_type_id: userData.startupProfileCreatorTypeId,
    })
    .eq('id', user.id);

  console.log(profilesData, profilesError);

  response.send({
    user,
    profileData: request.body,
  });
};

export default handler;
