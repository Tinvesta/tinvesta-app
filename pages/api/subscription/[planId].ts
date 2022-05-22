/* eslint-disable unicorn/filename-case */
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { createStripeInstance, objectToQueryString } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError, EPaymentStatus, ERoutes } from '@enums';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
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
    let stripeCustomer = selectedSubscriptionsData.stripe_customer;
    const stripe = createStripeInstance();

    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user.email,
      });

      const { error: updatedSubscriptionsError } = await supabaseInstance
        .from('subscriptions')
        .update({
          stripe_customer: customer.id,
        })
        .eq('profile_id', user.id);

      if (updatedSubscriptionsError) {
        return response.status(500).send(updatedSubscriptionsError);
      }

      stripeCustomer = customer.id;
    }

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
      customer: stripeCustomer,
      payment_method_types: ['card'],
      cancel_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}`,
      success_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}${objectToQueryString({
        paymentStatus: EPaymentStatus.SUCCESS,
      })}`,
    });

    return response.status(200).send({
      id: session.id,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(500).send(error.message);
    }

    return response.status(500).send(error);
  }
};

export default handler;
