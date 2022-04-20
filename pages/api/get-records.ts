import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import {
  arrayOfObjectsToArrayOfNumbers,
  convertObjectKeysToCamelCase,
  isArray,
  isObject,
  isStartupProfile,
} from '@utils';

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

  const { data: loggedUserProfileData } = await supabaseInstance
    .from('profiles')
    .select('client_type_id')
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

  const { data: matchingRecords } = await supabaseInstance.rpc('get_records', {
    profile_id_input: user.id,
  });

  const profileIds = matchingRecords?.map((_record) => _record.id) || [];

  const { data: recordsWithDetails } = await supabaseInstance
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
    .in('id', profileIds);

  const parsedRecords =
    (recordsWithDetails?.map(convertObjectKeysToCamelCase) || [])?.map((_record) => {
      const newRecord = _record;

      if (!isObject(newRecord)) {
        return newRecord;
      }

      for (const _key of Object.keys(newRecord)) {
        const currentRecord = (_record as Record<string, unknown>)[_key];

        if (isArray(currentRecord) && isObject(currentRecord[0])) {
          const arrayOfNumbers = arrayOfObjectsToArrayOfNumbers(
            currentRecord,
            Object.keys(currentRecord[0])[0],
          );

          // @ts-expect-error
          newRecord[_key] = arrayOfNumbers;
        }
      }

      return newRecord;
    }) || [];

  response.send(parsedRecords);
};

export default handler;
