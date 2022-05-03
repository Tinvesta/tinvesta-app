/* eslint-disable unicorn/filename-case */
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

import { objectToQueryString } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError, EPaymentStatus, ERoutes } from '@enums';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  // TODO - enable validation
  // if (request.headers.authorization !== apiRouteSecret) {
  //   return response.status(401).send(EApiError.UNAUTHORIZED);
  // }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.query.priceId) {
    return response.status(400).send(EApiError.BAD_REQUEST);
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
  const { priceId } = request.query as { priceId: string };

  const lineItems = [
    {
      quantity: 1,
      price: priceId,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: lineItems,
    customer: stripe_customer,
    payment_method_types: ['card'],
    cancel_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}${objectToQueryString({
      paymentStatus: EPaymentStatus.CANCEL,
    })}`,
    success_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}${objectToQueryString({
      paymentStatus: EPaymentStatus.SUCCESS,
    })}`,
  });

  response.send({
    id: session.id,
  });
};

export default handler;
