import * as R from 'ramda';
import cookie from 'cookie';
import { isToday } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';
import { hasOwnProperty } from 'ts-has-own-property';

import { convertObjectKeysToCamelCase } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiEndpoint, EApiError } from '@enums';

import { IProfileDetails } from '@interfaces';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const createLikeRecord = async (loggedUserId: string, profileIdToLike: string, vote: boolean) => {
  const { data, error } = await supabaseInstance.from('likes').insert({
    liked: vote,
    from_profile_id: loggedUserId,
    to_profile_id: profileIdToLike,
  });

  if (!data) {
    return null;
  }

  return { data: data[0].id, error };
};

const updateLikeRecord = async (
  id: string,
  fromProfileId: string,
  toProfileId: string,
  vote: boolean,
) => {
  const { data, error } = await supabaseInstance
    .from('likes')
    .update({
      seen: true,
      liked: vote,
      to_profile_id: toProfileId,
      from_profile_id: fromProfileId,
    })
    .eq('id', id);

  if (!data) {
    return null;
  }

  return { data: data[0], error };
};

const parseProfileDetails = (profileData: IProfileDetails) => {
  const parsedProfileData = convertObjectKeysToCamelCase(profileData);

  return R.pick(['contactEmail', 'avatars'], parsedProfileData);
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!hasOwnProperty(request.body, 'profileIdToLike') && !hasOwnProperty(request.body, 'vote')) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.BAD_REQUEST,
      'No profileIdToLike and vote - request body',
      request.body,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const loggedUserId = user.id;
  const { profileIdToLike, vote } = request.body;

  if (profileIdToLike === loggedUserId) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.BAD_REQUEST,
      'profileIdToLike is equal to loggedUserId - request body',
      request.body,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const { data: loggedProfileSubscriptionsData, error: loggedProfileSubscriptionsError } =
    await supabaseInstance.from('subscriptions').select('*').eq('profile_id', user.id).single();

  if (loggedProfileSubscriptionsError) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      loggedProfileSubscriptionsError,
    );

    return response.status(500).send(loggedProfileSubscriptionsError);
  }

  // Verify if the user can like the profile
  if (!loggedProfileSubscriptionsData.is_subscribed && vote) {
    const { data: loggedUserCounterData, error: loggedUserCounterError } = await supabaseInstance
      .from('likes_counter')
      .select('*')
      .eq('profile_id', user.id);

    if (loggedUserCounterError) {
      logApiError(
        EApiEndpoint.LIKE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        loggedUserCounterError,
      );

      return response.status(500).send(loggedUserCounterError);
    }

    // Insert likes_counter when does not exists
    if (loggedUserCounterData.length === 0) {
      const { error: insertedLikesCounterError } = await supabaseInstance
        .from('likes_counter')
        .insert({
          count: 1,
          profile_id: user.id,
        });

      if (insertedLikesCounterError) {
        logApiError(
          EApiEndpoint.LIKE_PROFILE,
          EApiError.INTERNAL_SERVER_ERROR,
          'Error',
          insertedLikesCounterError,
        );

        return response.status(500).send(insertedLikesCounterError);
      }
      // Increase counter when exists
    } else {
      const likesCounterDate = new Date(loggedUserCounterData[0].created_at);

      // If today
      if (isToday(likesCounterDate)) {
        const { error: updatedLikesCounterError } = await supabaseInstance
          .from('likes_counter')
          .update({
            count: loggedUserCounterData[0].count + 1,
          })
          .eq('profile_id', user.id);

        if (updatedLikesCounterError) {
          logApiError(
            EApiEndpoint.LIKE_PROFILE,
            EApiError.INTERNAL_SERVER_ERROR,
            'Error',
            updatedLikesCounterError,
          );

          return response.status(500).send(updatedLikesCounterError);
        }
      } else {
        // Remove old counter
        const { error: deletedLikesCounterError } = await supabaseInstance
          .from('likes_counter')
          .delete()
          .eq('profile_id', user.id);

        if (deletedLikesCounterError) {
          logApiError(
            EApiEndpoint.LIKE_PROFILE,
            EApiError.INTERNAL_SERVER_ERROR,
            'Error',
            deletedLikesCounterError,
          );

          return response.status(500).send(deletedLikesCounterError);
        }

        // And insert new one
        const { error: insertedLikesCounterError } = await supabaseInstance
          .from('likes_counter')
          .insert({
            count: 1,
            profile_id: user.id,
          });

        if (insertedLikesCounterError) {
          logApiError(
            EApiEndpoint.LIKE_PROFILE,
            EApiError.INTERNAL_SERVER_ERROR,
            'Error',
            insertedLikesCounterError,
          );

          return response.status(500).send(insertedLikesCounterError);
        }
      }
    }
  }

  // Logic of making like
  const foundLikeFromOtherProfile = await supabaseInstance
    .from('likes')
    .select('*')
    .match({ from_profile_id: profileIdToLike, to_profile_id: loggedUserId })
    .single();

  if (!foundLikeFromOtherProfile) {
    logApiError(
      EApiEndpoint.LIKES,
      EApiError.INTERNAL_SERVER_ERROR,
      'foundLikeFromOtherProfile does not exist - request body',
      request.body,
    );

    return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
  }

  if (foundLikeFromOtherProfile.data?.liked === true) {
    const updatedLike = await updateLikeRecord(
      foundLikeFromOtherProfile.data.id,
      profileIdToLike,
      loggedUserId,
      vote,
    );

    if (!updatedLike) {
      logApiError(
        EApiEndpoint.LIKE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'updatedLike does not exist - request body',
        request.body,
      );

      return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
    }

    if (updatedLike.error) {
      logApiError(
        EApiEndpoint.LIKE_PROFILE,
        EApiError.INTERNAL_SERVER_ERROR,
        'Error',
        updatedLike.error,
      );

      return response.status(500).send(updatedLike.error);
    }

    if (updatedLike.data?.liked) {
      const [
        { data: likedProfileDetailsData, error: likedProfileDetailsError },
        { data: loggedProfileDetailsData, error: loggedProfileDetailsError },
      ] = await Promise.all([
        supabaseInstance
          .rpc('profile_details', {
            profile_id_input: profileIdToLike,
          })
          .single(),
        supabaseInstance
          .rpc('profile_details', {
            profile_id_input: loggedUserId,
          })
          .single(),
      ]);

      if (likedProfileDetailsError) {
        logApiError(
          EApiEndpoint.LIKE_PROFILE,
          EApiError.INTERNAL_SERVER_ERROR,
          'Error',
          likedProfileDetailsError,
        );

        return response.status(500).send(likedProfileDetailsError);
      }

      if (loggedProfileDetailsError) {
        logApiError(
          EApiEndpoint.LIKE_PROFILE,
          EApiError.INTERNAL_SERVER_ERROR,
          'Error',
          loggedProfileDetailsError,
        );

        return response.status(500).send(loggedProfileDetailsError);
      }

      return response.status(200).send({
        isMatch: updatedLike.data.liked,
        likedProfileDetails: parseProfileDetails(likedProfileDetailsData),
        loggedProfileDetails: parseProfileDetails(loggedProfileDetailsData),
      });
    }

    return response.send({ isMatch: updatedLike.data.liked });
  }

  if (foundLikeFromOtherProfile.data?.liked === false) {
    const updatedLike = await updateLikeRecord(
      foundLikeFromOtherProfile.data.id,
      profileIdToLike,
      loggedUserId,
      false,
    );

    if (!updatedLike) {
      return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
    }

    if (updatedLike.error) {
      return response.status(500).send(updatedLike.error);
    }

    return response.status(200).send({ isMatch: updatedLike.data.liked });
  }

  const createdLikeRecord = await createLikeRecord(loggedUserId, profileIdToLike, vote);

  if (!createdLikeRecord) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'createdLikeRecord does not exist - request body',
      request.body,
    );

    return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
  }

  if (createdLikeRecord.error) {
    logApiError(
      EApiEndpoint.LIKE_PROFILE,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      createdLikeRecord.error,
    );

    return response.status(500).send(createdLikeRecord.error);
  }

  return response.status(200).send({ isMatch: false });
};

export default handler;
