import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { countWords, isArray, isStartupProfile } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const createAvatarRecord = async (profileId: string, imageKey: string, position: number) => {
  const { data: storagePublicUrlData, error: storagePublicUrlError } =
    await supabaseInstance.storage.from('avatars').getPublicUrl(imageKey);

  if (storagePublicUrlError || !storagePublicUrlData) {
    return null;
  }

  const bucketNamesCount = countWords(storagePublicUrlData.publicURL, 'avatars');
  const parsedPublicUrl =
    bucketNamesCount >= 2
      ? storagePublicUrlData.publicURL.replace('/avatars', '')
      : storagePublicUrlData.publicURL;

  return supabaseInstance.from('avatars').insert({
    position,
    avatar_key: imageKey,
    profile_id: profileId,
    avatar_public_url: parsedPublicUrl,
  });
};

const assignWithBulkInsert = async (
  userId: string,
  table: string,
  idColumnName: string,
  arrayOfIds: number[],
) => {
  if (!isArray(arrayOfIds)) {
    return { error: '' };
  }

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
  const isStartup = isStartupProfile(userData.clientTypeId);

  // process image keys
  if (userData.imageKeys) {
    const { data: avatars } = await supabaseInstance
      .from('avatars')
      .select('*')
      .eq('profile_id', user.id);

    const avatarsToRemove = avatars?.reduce((_accumulator, _avatar) => {
      if (!userData.imageKeys.includes(_avatar.avatar_public_url)) {
        return [..._accumulator, _avatar];
      }

      return _accumulator;
    }, []);

    let i = 0;

    // upload new avatars
    for (const _imageKey of userData.imageKeys) {
      if (_imageKey.startsWith('avatars/')) {
        // eslint-disable-next-line no-await-in-loop
        await createAvatarRecord(user.id, _imageKey, i);
      }

      i += 1;
    }

    // remove old avatars
    for (const _avatar of avatarsToRemove) {
      // eslint-disable-next-line no-await-in-loop
      await supabaseInstance.from('avatars').delete().eq('id', _avatar.id);

      // eslint-disable-next-line no-await-in-loop
      await supabaseInstance.storage
        .from('avatars')
        .remove([_avatar.avatar_key.replace('avatars/', '')]);
    }
  }

  // assign focus markets
  const { error: assignProfilesFocusMarketsError } = await assignWithBulkInsert(
    user.id,
    'profiles_focus_markets',
    'focus_market_id',
    userData.focusMarketIds,
  );

  if (assignProfilesFocusMarketsError) {
    return response.status(500).send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_FOCUS_MARKETS);
  }

  // assign industrial sectors
  const { error: assignProfilesIndustrialSectorsError } = await assignWithBulkInsert(
    user.id,
    'profiles_industrial_sectors',
    'industrial_sector_id',
    userData.industrialSectorIds,
  );

  if (assignProfilesIndustrialSectorsError) {
    return response
      .status(500)
      .send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_INDUSTRIAL_SECTORS);
  }

  // assign investment sizes
  const { error: assignProfilesInvestmentSizesError } = await assignWithBulkInsert(
    user.id,
    'profiles_investment_sizes',
    'investment_size_id',
    userData.investmentSizeIds,
  );

  if (assignProfilesInvestmentSizesError) {
    return response
      .status(500)
      .send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_INVESTMENT_SIZES);
  }

  // assign investment stage types
  const { error: assignProfilesInvestmentStageTypesError } = await assignWithBulkInsert(
    user.id,
    'profiles_investment_stage_types',
    'investment_stage_type_id',
    userData.investmentStageTypeIds,
  );

  if (assignProfilesInvestmentStageTypesError) {
    return response
      .status(500)
      .send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_INVESTMENT_STAGE_TYPES);
  }

  // assign startup sectors
  const { error: assignProfilesStartupSectorsError } = await assignWithBulkInsert(
    user.id,
    'profiles_startup_sectors',
    'startup_sector_id',
    userData.startupSectorIds,
  );

  if (assignProfilesStartupSectorsError) {
    return response
      .status(500)
      .send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_STARTUP_SECTORS);
  }

  // assign team sizes
  const { error: assignProfilesTeamSizesError } = await assignWithBulkInsert(
    user.id,
    'profiles_team_sizes',
    'team_size_id',
    userData.teamSizeIds,
  );

  if (assignProfilesTeamSizesError) {
    return response.status(500).send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_TEAM_SIZES);
  }

  if (!isStartup) {
    // assign investor demand types
    const { error: assignInvestorDemandTypesError } = await assignWithBulkInsert(
      user.id,
      'profiles_investor_demand_types',
      'investor_demand_type_id',
      userData.investorDemandTypeIds,
    );

    if (assignInvestorDemandTypesError) {
      return response
        .status(500)
        .send(EApiError.UPDATE_PROFILE_PROBLEM_WITH_PROFILES_INVESTOR_DEMAND_TYPES);
    }
  } else {
    await supabaseInstance
      .from('profiles_investor_demand_types')
      .delete()
      .eq('profile_id', user.id);
  }

  // update profiles
  await supabaseInstance
    .from('profiles')
    .update({
      location: userData.location,
      last_name: userData.lastName,
      first_name: userData.firstName,
      company_name: userData.companyName,
      contact_email: userData.contactEmail,
    })
    .eq('id', user.id);

  response.send({ status: 'success' });
};

export default handler;
