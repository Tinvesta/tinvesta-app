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

  const { matchId } = request.query;

  if (!matchId) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const { error: foundLikeError } = await supabaseInstance
    .from('likes')
    .select('*')
    .eq('id', matchId)
    .single();

  if (foundLikeError) {
    return response.status(500).send(foundLikeError);
  }

  const { error: updatedLikeError } = await supabaseInstance
    .from('likes')
    .update({
      liked: false,
    })
    .eq('id', matchId);

  if (updatedLikeError) {
    return response.status(500).send(updatedLikeError);
  }

  return response.status(200).send({
    message: 'success',
  });
};

export default handler;
