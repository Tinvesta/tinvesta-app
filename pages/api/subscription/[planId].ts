/* eslint-disable unicorn/filename-case */
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

import { objectToQueryString } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError, EPaymentStatus, ERoutes } from '@enums';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.query.planId) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const { data: selectedSubscriptionsData, error: selectedSubscriptionsError } =
    await supabaseInstance
      .from('subscriptions')
      .select('stripe_customer')
      .eq('profile_id', user.id)
      .single();

  if (selectedSubscriptionsError) {
    return response.status(500).send(selectedSubscriptionsError);
  }

  try {
    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });
    const { planId } = request.query as { planId: string };

    const lineItems = [
      {
        quantity: 1,
        price: planId,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: lineItems,
      payment_method_types: ['card'],
      cancel_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}`,
      customer: selectedSubscriptionsData.stripe_customer,
      success_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}${objectToQueryString({
        paymentStatus: EPaymentStatus.SUCCESS,
      })}`,
    });

    response.status(200).send({
      id: session.id,
    });
  } catch (error) {
    if (error instanceof Error) {
      response.status(500).send(error.message);
    }

    response.status(500).send(error);
  }

  response.status(200).send({
    id: null,
  });
};

export default handler;
