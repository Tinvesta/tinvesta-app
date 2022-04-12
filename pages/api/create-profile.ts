import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

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

  const { data: profilesData, error: profilesError } = await supabaseInstance
    .from('profiles')
    .update({
      location: userData.location,
      last_name: userData.lastName,
      first_name: userData.firstName,
      company_name: userData.companyName,
      startup_claim: userData.startupClaim,
      client_type_id: userData.clientTypeId,
      vision_statement: userData.visionStatement,
      mission_statement: userData.missionStatement,
      what_you_are_looking_for: userData.whatYouAreLookingFor,
      investor_profile_type_id: userData.investorProfileTypeId,
    })
    .eq('id', user.id);

  console.log(profilesData, profilesError);

  response.send({
    user,
    profileData: request.body,
  });
};

export default handler;
