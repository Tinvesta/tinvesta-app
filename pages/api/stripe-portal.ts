import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { createStripeInstance } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiError, ERoutes } from '@enums';

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
    const stripe = createStripeInstance();
    let stripeCustomer = selectedSubscriptionsData.stripe_customer;

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

    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomer,
      return_url: `${appUrl}${ERoutes.DASHBOARD_PROFILE}`,
    });

    return response.status(200).send({
      url: session.url,
    });
  } catch (error) {
    return response.status(500).send(error);
  }
};

export default handler;
