import * as R from 'ramda';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { convertObjectKeysToCamelCase, hasOwnProperty } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

import { IProfileDetails } from '@interfaces';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const findLikesRecordByUserIds = (fromProfileId: string, toProfileId: string) =>
  supabaseInstance
    .from('likes')
    .select('*')
    .match({ from_profile_id: fromProfileId, to_profile_id: toProfileId })
    .single();

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
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!hasOwnProperty(request.body, 'profileIdToLike') && !hasOwnProperty(request.body, 'vote')) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const loggedUserId = user.id;
  const { profileIdToLike, vote } = request.body;

  if (profileIdToLike === loggedUserId) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const foundLikeFromOtherProfile = await findLikesRecordByUserIds(profileIdToLike, loggedUserId);

  if (!foundLikeFromOtherProfile) {
    return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
  }

  if (foundLikeFromOtherProfile && foundLikeFromOtherProfile.data.liked === true) {
    const updatedLike = await updateLikeRecord(
      foundLikeFromOtherProfile.data.id,
      profileIdToLike,
      loggedUserId,
      vote,
    );

    if (!updatedLike) {
      return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
    }

    if (updatedLike.error) {
      return response.status(500).send(updatedLike.error);
    }

    if (updatedLike.data.liked) {
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
        return response.status(500).send(likedProfileDetailsError);
      }

      if (loggedProfileDetailsError) {
        return response.status(500).send(loggedProfileDetailsError);
      }

      return response.send({
        isMatch: updatedLike.data.liked,
        likedProfileDetails: parseProfileDetails(likedProfileDetailsData),
        loggedProfileDetails: parseProfileDetails(loggedProfileDetailsData),
      });
    }

    return response.send({ isMatch: updatedLike.data.liked });
  }

  if (foundLikeFromOtherProfile && foundLikeFromOtherProfile.data.liked === false) {
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
    return response.status(500).send(EApiError.INTERNAL_SERVER_ERROR);
  }

  if (createdLikeRecord.error) {
    return response.status(500).send(createdLikeRecord.error);
  }

  response.send({ isMatch: false });
};

export default handler;
