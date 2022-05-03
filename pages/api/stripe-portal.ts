import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

import { supabaseInstance } from '@infrastructure';

import { EApiError, ERoutes } from '@enums';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  // TODO - add api route secret validation
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

  const {
    data: { stripe_customer },
  } = await supabaseInstance
    .from('subscriptions')
    .select('stripe_customer')
    .eq('profile_id', user.id)
    .single();

  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });

  const session = await stripe.billingPortal.sessions.create({
    customer: stripe_customer,
    return_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}`,
  });

  response.send({
    url: session.url,
  });
};

export default handler;
