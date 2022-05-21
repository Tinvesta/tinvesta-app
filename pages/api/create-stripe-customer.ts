import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

import { supabaseInstance } from '@infrastructure';

import { EApiError } from '@enums';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.query.API_ROUTE_SECRET !== apiRouteSecret) {
    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!request.body.record.profile_id) {
    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const { data: selectedProfileData, error: selectedProfileError } = await supabaseInstance
    .from('profiles')
    .select('*')
    .eq('id', request.body.record.profile_id)
    .single();

  if (selectedProfileError) {
    return response.status(500).send(selectedProfileError);
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });

  const customer = await stripe.customers.create({
    email: selectedProfileData.email,
  });

  const { error: updatedSubscriptionsError } = await supabaseInstance
    .from('subscriptions')
    .update({
      stripe_customer: customer.id,
    })
    .eq('profile_id', selectedProfileData.id);

  if (updatedSubscriptionsError) {
    return response.status(500).send(updatedSubscriptionsError);
  }

  response.send({ message: `stripe customer created with id: '${customer.id}'` });
};

export default handler;
