import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';

import { createStripeInstance } from '@utils';

import { supabaseInstance } from '@infrastructure';

const stripeSigningSecret = process.env.STRIPE_SIGNING_SECRET;

export const config = { api: { bodyParser: false } };

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const stripe = createStripeInstance();
  const signature = request.headers['stripe-signature'];
  const requestBuffer = await buffer(request);

  if (!signature) {
    return response.send({ received: true });
  }

  try {
    const event = stripe.webhooks.constructEvent(requestBuffer, signature, stripeSigningSecret);

    switch (event.type) {
      case 'customer.subscription.updated':
        // eslint-disable-next-line no-lone-blocks
        {
          const { error: updatedSubscriptionError } = await supabaseInstance
            .from('subscriptions')
            .update({
              is_subscribed: true,
              // @ts-expect-error
              interval: event.data.object.items.data[0].plan.interval,
            })
            // @ts-expect-error
            .eq('stripe_customer', event.data.object.customer);

          if (updatedSubscriptionError) {
            throw new Error(updatedSubscriptionError.message);
          }
        }
        break;

      case 'customer.subscription.deleted':
        // eslint-disable-next-line no-lone-blocks
        {
          const { error: updatedSubscriptionError } = await supabaseInstance
            .from('subscriptions')
            .update({
              interval: null,
              is_subscribed: false,
            })
            // @ts-expect-error
            .eq('stripe_customer', event.data.object.customer);

          if (updatedSubscriptionError) {
            throw new Error(updatedSubscriptionError.message);
          }
        }
        break;

      default:
        break;
    }
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send(`Webhook error: ${error?.message}`);
    }

    return response.status(400).send('Webhook error');
  }

  response.send({ received: true });
};

export default handler;
