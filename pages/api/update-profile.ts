import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { countWords, isArray, isStartupProfile } from '@utils';

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
  if (!isArray(arrayOfIds)) {
    return { error: null };
  }

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
      EApiEndpoint.UPDATE_PROFILE,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.UPDATE_PROFILE,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.body) {
    logApiError(
      EApiEndpoint.UPDATE_PROFILE,
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

  // process image keys
  if (userData.imageKeys) {
    const { data: profileAvatarsData, error: profileAvatarsError } = await supabaseInstance
      .from('avatars')
      .select('*')
      .eq('profile_id', user.id);

    if (profileAvatarsError) {
      logApiError(
        EApiEndpoint.UPDATE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        profileAvatarsError,
      );

      return response.status(500).send(profileAvatarsError);
    }

    const avatarsToRemove = profileAvatarsData?.reduce((_accumulator, _avatar) => {
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
        const { error: createdAvatarRecordError } = await createAvatarRecord(user.id, _imageKey, i);

        if (createdAvatarRecordError) {
          return response.status(500).send(createdAvatarRecordError);
        }
      } else {
        // eslint-disable-next-line no-await-in-loop
        const { data: avatarsData, error: avatarsError } = await supabaseInstance
          .from('avatars')
          .select('position')
          .eq('avatar_public_url', _imageKey)
          .single();

        if (avatarsError) {
          logApiError(
            EApiEndpoint.UPDATE_PROFILE,
            EApiError.INTERNAL_SERVER_ERROR,
            'Error',
            avatarsError,
          );

          return response.status(500).send(avatarsError);
        }

        if (avatarsData.position !== i) {
          // eslint-disable-next-line no-await-in-loop
          const { error: updatedProfileError } = await supabaseInstance
            .from('avatars')
            .update({
              position: i,
            })
            .eq('avatar_public_url', _imageKey);

          if (updatedProfileError) {
            logApiError(
              EApiEndpoint.UPDATE_PROFILE,
              EApiError.INTERNAL_SERVER_ERROR,
              'Error',
              updatedProfileError,
            );

            return response.status(500).send(updatedProfileError);
          }
        }
      }

      i += 1;
    }

    // remove old avatars
    for (const _avatar of avatarsToRemove) {
      // eslint-disable-next-line no-await-in-loop
      const { error: deletedAvatarError } = await supabaseInstance
        .from('avatars')
        .delete()
        .eq('id', _avatar.id);

      if (deletedAvatarError) {
        logApiError(
          EApiEndpoint.UPDATE_PROFILE,
          EApiError.INTERNAL_SERVER_ERROR,
          'Error',
          deletedAvatarError,
        );

        return response.status(500).send(deletedAvatarError);
      }

      // eslint-disable-next-line no-await-in-loop
      const { error: storageRemoveError } = await supabaseInstance.storage
        .from('avatars')
        .remove([_avatar.avatar_key.replace('avatars/', '')]);

      if (storageRemoveError) {
        logApiError(
          EApiEndpoint.UPDATE_PROFILE,
          EApiError.INTERNAL_SERVER_ERROR,
          'Error',
          storageRemoveError,
        );

        return response.status(500).send(storageRemoveError);
      }
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
    logApiError(
      EApiEndpoint.UPDATE_PROFILE,
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
      EApiEndpoint.UPDATE_PROFILE,
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
      EApiEndpoint.UPDATE_PROFILE,
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
      EApiEndpoint.UPDATE_PROFILE,
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
      EApiEndpoint.UPDATE_PROFILE,
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
      EApiEndpoint.UPDATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      assignProfilesTeamSizesError,
    );

    return response.status(500).send(assignProfilesTeamSizesError);
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
      logApiError(
        EApiEndpoint.UPDATE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        assignInvestorDemandTypesError,
      );

      return response.status(500).send(assignInvestorDemandTypesError);
    }
  } else {
    const { error: profilesInvestorDemandTypesError } = await supabaseInstance
      .from('profiles_investor_demand_types')
      .delete()
      .eq('profile_id', user.id);

    if (profilesInvestorDemandTypesError) {
      logApiError(
        EApiEndpoint.UPDATE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        profilesInvestorDemandTypesError,
      );

      return response.status(500).send(profilesInvestorDemandTypesError);
    }
  }

  // update profiles
  const { error: updatedProfileError } = await supabaseInstance
    .from('profiles')
    .update({
      location: userData.location,
      last_name: userData.lastName,
      first_name: userData.firstName,
      company_name: userData.companyName,
      contact_email: userData.contactEmail,
    })
    .eq('id', user.id);

  if (updatedProfileError) {
    logApiError(
      EApiEndpoint.UPDATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      updatedProfileError,
    );

    return response.status(500).send(updatedProfileError);
  }

  const { error: updateStartupOrInvestorError } = await (!isStartup
    ? supabaseInstance
        .from('investors')
        .update({
          investor_profile_type_id: userData.investorProfileTypeId,
          why_startup_should_match_with_you: userData.whyStartupShouldMatchWithYou,
        })
        .eq('profile_id', user.id)
    : supabaseInstance
        .from('startups')
        .update({
          startup_claim: userData.startupClaim,
          vision_statement: userData.visionStatement,
          mission_statement: userData.missionStatement,
          startup_profile_creator_type_id: userData.startupProfileCreatorTypeId,
        })
        .eq('profile_id', user.id));

  if (updateStartupOrInvestorError) {
    logApiError(
      EApiEndpoint.UPDATE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      updateStartupOrInvestorError,
    );

    return response.status(500).send(updateStartupOrInvestorError);
  }

  response.status(200).send({ status: 'success' });
};

export default handler;
