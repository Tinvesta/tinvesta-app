import { NextApiRequest, NextApiResponse } from 'next';

import { EApiError } from '@enums';

const apiRouteSecret = process.env.API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const currentDate = new Date();
  const isoDate = currentDate.toISOString();

  response.send(isoDate);
};

export default handler;
