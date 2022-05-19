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

  if (!request.query.limit || !request.query.offset) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const { data: matches } = await supabaseInstance.rpc('matches', {
    profile_id_input: user.id,
    limit_input: request.query.limit,
    offset_input: request.query.offset,
  });

  const parsedMatches = matches?.map(convertObjectKeysToCamelCase) || [];

  response.send(parsedMatches);
};

export default handler;
