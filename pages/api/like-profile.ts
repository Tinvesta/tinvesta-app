import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasOwnProperty } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const findLikesRecordByUserIds = async (fromProfileId: string, toProfileId: string) => {
  const { data } = await supabaseInstance
    .from('likes')
    .select('*')
    .match({ from_profile_id: fromProfileId, to_profile_id: toProfileId })
    .single();

  return data;
};

const createLikeRecord = async (loggedUserId: string, profileIdToLike: string, vote: boolean) => {
  const { data } = await supabaseInstance.from('likes').insert({
    liked: vote,
    from_profile_id: loggedUserId,
    to_profile_id: profileIdToLike,
  });

  if (!data) {
    return null;
  }

  return data[0].id;
};

const updateLikeRecord = async (
  id: string,
  fromProfileId: string,
  toProfileId: string,
  vote: boolean,
) => {
  const { data } = await supabaseInstance
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

  return data[0];
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

  if (foundLikeFromOtherProfile && foundLikeFromOtherProfile.liked === true) {
    const updatedLike = await updateLikeRecord(
      foundLikeFromOtherProfile.id,
      profileIdToLike,
      loggedUserId,
      vote,
    );

    if (updatedLike.liked) {
      const [{ data: likedProfileDetails }, { data: loggedProfileDetails }] = await Promise.all([
        supabaseInstance
          .rpc('profile_details', {
            profile_id_input: loggedUserId,
          })
          .single(),
        supabaseInstance
          .rpc('profile_details', {
            profile_id_input: profileIdToLike,
          })
          .single(),
      ]);

      return response.send({
        isMatch: updatedLike.liked,
        loggedProfileDetails,
        likedProfileDetails,
      });
    }

    return response.send({ isMatch: updatedLike.liked });
  }

  if (foundLikeFromOtherProfile && foundLikeFromOtherProfile.liked === false) {
    const updatedLike = await updateLikeRecord(
      foundLikeFromOtherProfile.id,
      profileIdToLike,
      loggedUserId,
      false,
    );

    response.send({ isMatch: updatedLike.liked });

    return;
  }

  await createLikeRecord(loggedUserId, profileIdToLike, vote);

  response.send({ isMatch: false });
};

export default handler;
