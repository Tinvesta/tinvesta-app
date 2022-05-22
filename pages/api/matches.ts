import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { convertObjectKeysToCamelCase } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiEndpoint, EApiError } from '@enums';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.MATCHES,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.MATCHES,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.query.limit || !request.query.offset) {
    logApiError(
      EApiEndpoint.MATCHES,
      EApiError.BAD_REQUEST,
      'No limit or offset - request query',
      request.query,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const { data: matchesData, error: matchesError } = await supabaseInstance.rpc('matches', {
    profile_id_input: user.id,
    limit_input: request.query.limit,
    offset_input: request.query.offset,
  });

  if (matchesError) {
    logApiError(EApiEndpoint.MATCHES, EApiError.INTERNAL_SERVER_ERROR, 'Error', matchesError);

    return response.status(500).send(matchesError);
  }

  const parsedMatches = matchesData?.map(convertObjectKeysToCamelCase) || [];

  response.send(parsedMatches);
};

export default handler;
