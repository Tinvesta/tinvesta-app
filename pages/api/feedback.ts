import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { hasOwnProperty } from 'ts-has-own-property';
import { objectKeys } from 'ts-object-keys';

import { supabaseInstance } from '@infrastructure';

import { EApiEndpoint, EApiError } from '@enums';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.FEEDBACK,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.FEEDBACK,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.body) {
    logApiError(
      EApiEndpoint.FEEDBACK,
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

  if (
    objectKeys(request.body).length !== 2 ||
    !hasOwnProperty(request.body, 'rating') ||
    !hasOwnProperty(request.body, 'message')
  ) {
    logApiError(
      EApiEndpoint.FEEDBACK,
      EApiError.BAD_REQUEST,
      'No rating or message - request body',
      request.body,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const { error: insertFeedbackError } = await supabaseInstance.from('feedback').insert({
    ...request.body,
    profile_id: user.id,
  });

  if (insertFeedbackError) {
    logApiError(
      EApiEndpoint.FEEDBACK,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      insertFeedbackError,
    );

    return response.status(500).send(insertFeedbackError);
  }

  response.send(true);
};

export default handler;
