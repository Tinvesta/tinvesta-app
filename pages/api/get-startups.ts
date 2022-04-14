import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { isStartupProfile } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

import { STARTUP_CLIENT_TYPE_ID } from '@constants';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { data: loggedUserProfileData } = await supabaseInstance
    .from('profiles')
    .select(
      `
      id,
      client_type_id,
      industrial_sectors:profiles_industrial_sectors (
        industrial_sector_id
      )
    `,
    )
    .eq('id', user.id)
    .single();

  if (isStartupProfile(loggedUserProfileData.client_type_id)) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  console.log(loggedUserProfileData);

  const { data: matchingStartups } = await supabaseInstance
    .from('profiles')
    .select(
      `
      id,
      first_name,
      client_type_id,
      focus_markets:profiles_focus_markets (
        focus_market_id
      )
    `,
    )
    .match({ client_type_id: STARTUP_CLIENT_TYPE_ID });

  response.send({ startups: matchingStartups });
};

export default handler;
