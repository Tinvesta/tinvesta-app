import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasOwnProperty, objectKeys } from '@utils';

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

  const userData = request.body;

  if (
    !userData ||
    objectKeys(userData).length !== 2 ||
    !hasOwnProperty(userData, 'rating') ||
    !hasOwnProperty(userData, 'message')
  ) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const { error: feedbackError } = await supabaseInstance.from('feedback').insert({
    ...userData,
    profile_id: user.id,
  });

  if (feedbackError) {
    return response.status(500).send(feedbackError);
  }

  response.send(true);
};

export default handler;
