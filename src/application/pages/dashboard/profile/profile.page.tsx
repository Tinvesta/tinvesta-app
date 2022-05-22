import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Stripe } from 'stripe';

import { QueryParamProvider } from '@application';

import { Profile } from '@domain';

import { Loading } from '@ui';

import { useDeviceDetect, useUser } from '@utils';

import { ERoutes } from '@enums';

import { fetchDropdownsStaticData } from '../../utils';
import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';
import { IProfileProps } from './profile.types';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const ProfilePage = (props: IProfileProps): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();

  useEffect(() => {
    if (user === null && isLoading) {
      router.push(ERoutes.HOME);

      return;
    }

    if (user === null) {
      return;
    }

    if (!isLoading && !user?.client_type_id) {
      router.push(ERoutes.ONBOARDING);
    }
  }, [user, isLoading]);

  const shouldRenderLoader = !user || isLoading || !user?.client_type_id;

  if (shouldRenderLoader) {
    return <Loading />;
  }

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  return (
    <QueryParamProvider>
      <DashboardLayout>
        <Profile {...props} clientTypeId={user.client_type_id as number} />
      </DashboardLayout>
    </QueryParamProvider>
  );
};

export const getStaticProps = async () => {
  // Fetch data required for subscriptions section
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

  // Fetch data required for edit profile section
  const staticProps = await fetchDropdownsStaticData();

  return {
    props: {
      ...staticProps,
      plans: sortedPlans,
    },
  };
};
