import { GetServerSideProps } from 'next';
import { Stripe } from 'stripe';

import { Profile } from '@domain';

import { hasOwnProperty, useDeviceDetect } from '@utils';

import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';
import { IProfileProps } from './profile.types';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const ProfilePage = ({ plans }: IProfileProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  console.log(plans);

  return (
    <DashboardLayout>
      <Profile />
    </DashboardLayout>
  );
};

export const getServerSideProps = async (serverSideProps: GetServerSideProps) => {
  const result = await verifyUserAccess(serverSideProps);

  if (!hasOwnProperty(result, 'profileData') || !hasOwnProperty(result, 'user')) {
    return result;
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });

  const { data: prices } = await stripe.prices.list();

  const plans = await Promise.all(
    prices.map(async (_price) => {
      const product = await stripe.products.retrieve(_price.product.toString());

      return {
        id: _price.id,
        currency: _price.currency,
        price: _price.unit_amount,
        name: product?.name?.toLowerCase(),
        interval: _price.recurring?.interval,
      };
    }),
  );

  const sortedPlans = plans.sort((a, b) => (a.price || 0) - (b.price || 0));

  return {
    props: {
      plans: sortedPlans,
    },
  };
};
