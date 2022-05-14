import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { convertObjectKeysToCamelCase } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

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

  const { data: likes } = await supabaseInstance.rpc('likes', {
    profile_id_input: user.id,
  });

  const parsedLikes = likes?.map(convertObjectKeysToCamelCase) || [];

  response.send([
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
    ...parsedLikes,
  ]);
};

export default handler;
