import * as R from 'ramda';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { convertObjectKeysToCamelCase, hasOwnProperty } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError, ERoutes } from '@enums';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!hasOwnProperty(request.query, 'profileId')) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const isMatchPage = request.headers.referer?.endsWith(ERoutes.DASHBOARD_MATCHES);

  const { data: profileDetailsData, error: profileDetailsError } = await supabaseInstance
    .rpc('profile_details', {
      profile_id_input: request.query.profileId,
    })
    .single();

  if (profileDetailsError) {
    return response.status(500).send(profileDetailsError);
  }

  const parsedProfileDetailsData = convertObjectKeysToCamelCase(profileDetailsData);
  const omittedProfileDetailsData = R.omit(['contactEmail'], parsedProfileDetailsData);

  response.send(isMatchPage ? parsedProfileDetailsData : omittedProfileDetailsData);
};

export default handler;
