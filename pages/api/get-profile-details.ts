import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasOwnProperty } from '@utils';

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

  if (!hasOwnProperty(request.query, 'profileId')) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const { profileId } = request.query;

  const { data: profileData } = await supabaseInstance
    .from('profiles')
    .select(
      `
      first_name,
      last_name,
      company_name,
      location,
      what_you_are_looking_for,
      investor_profile_type_id,
      mission_statement,
      startup_claim,
      vision_statement,
      startup_profile_creator_type_id,
      avatars:avatar_id (
        avatar_public_url
      ),
      profiles_focus_markets (
        focus_market_id
      ),
      profiles_industrial_sectors (
        industrial_sector_id
      ),
      profiles_investment_sizes (
        investment_size_id
      ),
      profiles_investment_stage_types (
        investment_stage_type_id
      ),
      profiles_investor_demand_types (
        investor_demand_type_id
      ),
      profiles_startup_sectors (
        startup_sector_id
      ),
      profiles_team_sizes (
        team_size_id
      )
    `,
    )
    .eq('id', profileId)
    .single();

  response.send(profileData);
};

export default handler;
