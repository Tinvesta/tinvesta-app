import { NextApiRequest, NextApiResponse } from 'next';

import { supabaseInstance } from '@infrastructure';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  await supabaseInstance.auth.api.setAuthCookie(request, response);
};

export default handler;
