import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasOwnProperty } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const hasAlreadyBeenLiked = async (loggedUserId: string, profileIdToLike: string) => {
  const { data } = await supabaseInstance
    .from('likes')
    .select('id')
    .match({ from_profile_id: loggedUserId, to_profile_id: profileIdToLike })
    .single();

  return !!data?.id;
};

const createLikeRecord = async (loggedUserId: string, profileIdToLike: string, vote: number) => {
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

  const hasBeenLiked = await hasAlreadyBeenLiked(loggedUserId, profileIdToLike);

  if (!hasBeenLiked) {
    await createLikeRecord(loggedUserId, profileIdToLike, vote);

    response.send({ isMatch: false });

    return;
  }

  response.send({ isMatch: false });
};

export default handler;
