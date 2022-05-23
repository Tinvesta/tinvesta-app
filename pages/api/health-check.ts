import { NextApiRequest, NextApiResponse } from 'next';

import { EApiEndpoint, EApiError } from '@enums';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.HEALTH_CHECK,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const currentDate = new Date();
  const isoDate = currentDate.toISOString();

  response.status(200).send(isoDate);
};

export default handler;
