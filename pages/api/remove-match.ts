import { NextApiRequest, NextApiResponse } from 'next';

import { supabaseInstance } from '@infrastructure';

import { EApiEndpoint, EApiError } from '@enums';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.REMOVE_MATCH,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.REMOVE_MATCH,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { matchId } = request.query;

  if (!matchId) {
    logApiError(
      EApiEndpoint.REMOVE_MATCH,
      EApiError.BAD_REQUEST,
      'No matchId - request query',
      request.query,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const { error: foundLikeError } = await supabaseInstance
    .from('likes')
    .select('*')
    .eq('id', matchId)
    .single();

  if (foundLikeError) {
    logApiError(
      EApiEndpoint.REMOVE_MATCH,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      foundLikeError,
    );

    return response.status(500).send(foundLikeError);
  }

  const { error: updatedLikeError } = await supabaseInstance
    .from('likes')
    .update({
      liked: false,
    })
    .eq('id', matchId);

  if (updatedLikeError) {
    logApiError(
      EApiEndpoint.REMOVE_MATCH,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      updatedLikeError,
    );

    return response.status(500).send(updatedLikeError);
  }

  return response.status(200).send({
    message: 'success',
  });
};

export default handler;
