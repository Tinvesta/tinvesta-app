import { Stripe } from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const createStripeInstance = () => new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });
