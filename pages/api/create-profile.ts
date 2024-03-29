import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { countWords, isStartupProfile } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiEndpoint, EApiError } from '@enums';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const createAvatarRecord = async (profileId: string, imageKey: string, position: number) => {
  const { data: avatarPublicUrlData, error: avatarPublicUrlError } = await supabaseInstance.storage
    .from('avatars')
    .getPublicUrl(imageKey);

  if (!avatarPublicUrlData) {
    return { error: new Error('Error getting public url for avatar') };
  }

  if (avatarPublicUrlError) {
    return { error: avatarPublicUrlError };
  }

  const bucketNamesCount = countWords(avatarPublicUrlData.publicURL, 'avatars');
  const parsedPublicUrl =
    bucketNamesCount >= 2
      ? avatarPublicUrlData.publicURL.replace('/avatars', '')
      : avatarPublicUrlData.publicURL;

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
  const recordsToInsert = arrayOfIds.map((_id) => ({ [idColumnName]: _id, profile_id: userId }));

  const { error: deleteError } = await supabaseInstance
    .from(table)
    .delete()
    .eq('profile_id', userId);

  if (deleteError) {
    return { error: deleteError };
  }

  return supabaseInstance.from(table).insert(recordsToInsert);
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.body) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.BAD_REQUEST,
      'No body - request headers',
      request.headers,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const userData = request.body;
  const isStartup = isStartupProfile(userData.clientTypeId);

  if (!userData.imageKeys || userData.imageKeys.length === 0) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.BAD_REQUEST,
      'No image keys - request headers',
      request.headers,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  let i = 0;

  for (const _imageKey of userData.imageKeys) {
    // eslint-disable-next-line no-await-in-loop
    const { error: createdAvatarRecordError } = await createAvatarRecord(user.id, _imageKey, i);

    if (createdAvatarRecordError) {
      return response.status(500).send(createdAvatarRecordError);
    }

    i += 1;
  }

  // assign focus markets
  const { error: assignProfilesFocusMarketsError } = await assignWithBulkInsert(
    user.id,
    'profiles_focus_markets',
    'focus_market_id',
    userData.focusMarketIds,
  );

  if (assignProfilesFocusMarketsError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesFocusMarketsError,
    );

    return response.status(500).send(assignProfilesFocusMarketsError);
  }

  // assign industrial sectors
  const { error: assignProfilesIndustrialSectorsError } = await assignWithBulkInsert(
    user.id,
    'profiles_industrial_sectors',
    'industrial_sector_id',
    userData.industrialSectorIds,
  );

  if (assignProfilesIndustrialSectorsError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesIndustrialSectorsError,
    );

    return response.status(500).send(assignProfilesIndustrialSectorsError);
  }

  // assign investment sizes
  const { error: assignProfilesInvestmentSizesError } = await assignWithBulkInsert(
    user.id,
    'profiles_investment_sizes',
    'investment_size_id',
    userData.investmentSizeIds,
  );

  if (assignProfilesInvestmentSizesError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesInvestmentSizesError,
    );

    return response.status(500).send(assignProfilesInvestmentSizesError);
  }

  // assign investment stage types
  const { error: assignProfilesInvestmentStageTypesError } = await assignWithBulkInsert(
    user.id,
    'profiles_investment_stage_types',
    'investment_stage_type_id',
    userData.investmentStageTypeIds,
  );

  if (assignProfilesInvestmentStageTypesError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesInvestmentStageTypesError,
    );

    return response.status(500).send(assignProfilesInvestmentStageTypesError);
  }

  // assign startup sectors
  const { error: assignProfilesStartupSectorsError } = await assignWithBulkInsert(
    user.id,
    'profiles_startup_sectors',
    'startup_sector_id',
    userData.startupSectorIds,
  );

  if (assignProfilesStartupSectorsError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesStartupSectorsError,
    );

    return response.status(500).send(assignProfilesStartupSectorsError);
  }

  // assign team sizes
  const { error: assignProfilesTeamSizesError } = await assignWithBulkInsert(
    user.id,
    'profiles_team_sizes',
    'team_size_id',
    userData.teamSizeIds,
  );

  if (assignProfilesTeamSizesError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesTeamSizesError,
    );

    return response.status(500).send(assignProfilesTeamSizesError);
  }

  if (isStartup) {
    const { error: deletedProfilesInvestorDemandTypesError } = await supabaseInstance
      .from('profiles_investor_demand_types')
      .delete()
      .eq('profile_id', user.id);

    if (deletedProfilesInvestorDemandTypesError) {
      logApiError(
        EApiEndpoint.CREATE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        deletedProfilesInvestorDemandTypesError,
      );

      return response.status(500).send(deletedProfilesInvestorDemandTypesError);
    }
  } else {
    // assign investor demand types
    const { error: assignInvestorDemandTypesError } = await assignWithBulkInsert(
      user.id,
      'profiles_investor_demand_types',
      'investor_demand_type_id',
      userData.investorDemandTypeIds,
    );

    if (assignInvestorDemandTypesError) {
      logApiError(
        EApiEndpoint.CREATE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        assignInvestorDemandTypesError,
      );

      return response.status(500).send(assignInvestorDemandTypesError);
    }
  }

  // update profiles
  const { error: updatedProfileError } = await supabaseInstance
    .from('profiles')
    .update({
      ref: userData.userRef,
      location: userData.location,
      last_name: userData.lastName,
      first_name: userData.firstName,
      company_name: userData.companyName,
      contact_email: userData.contactEmail,
      client_type_id: userData.clientTypeId,
      what_are_you_looking_for: userData.whatAreYouLookingFor,
    })
    .eq('id', user.id);

  if (updatedProfileError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      updatedProfileError,
    );

    return response.status(500).send(updatedProfileError);
  }

  const { error: updateStartupOrInvestorError } = await (isStartup
    ? supabaseInstance.from('startups').insert({
        profile_id: user.id,
        startup_claim: userData.startupClaim,
        vision_statement: userData.visionStatement,
        mission_statement: userData.missionStatement,
        investor_profile_type_id: userData.investorProfileTypeId,
        startup_profile_creator_type_id: userData.startupProfileCreatorTypeId,
      })
    : supabaseInstance.from('investors').insert({
        profile_id: user.id,
        investor_profile_type_id: userData.investorProfileTypeId,
        why_startup_should_match_with_you: userData.whyStartupShouldMatchWithYou,
      }));

  if (updateStartupOrInvestorError) {
    logApiError(
      EApiEndpoint.CREATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      updateStartupOrInvestorError,
    );

    return response.status(500).send(updateStartupOrInvestorError);
  }

  response.status(200).send({ status: 'success' });
};

export default handler;
