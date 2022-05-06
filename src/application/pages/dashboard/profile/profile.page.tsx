import { GetServerSideProps } from 'next';
import { Stripe } from 'stripe';

import { Profile } from '@domain';

import { hasOwnProperty, useDeviceDetect } from '@utils';

import { supabaseInstance } from '@infrastructure';

import {
  IClientType,
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';
import { IProfileProps } from './profile.types';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const ProfilePage = (props: IProfileProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  return (
    <DashboardLayout>
      <Profile {...props} />
    </DashboardLayout>
  );
};

export const getServerSideProps = async (serverSideProps: GetServerSideProps) => {
  const result = await verifyUserAccess(serverSideProps);

  if (!hasOwnProperty(result, 'profileData') || !hasOwnProperty(result, 'user')) {
    return result;
  }

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
  const [
    { data: teamSizes },
    { data: clientTypes },
    { data: focusMarkets },
    { data: startupSectors },
    { data: investmentSizes },
    { data: industrialSectors },
    { data: investorDemandTypes },
    { data: investmentStageTypes },
    { data: investorProfileTypes },
    { data: startupProfileCreatorTypes },
  ] = await Promise.all([
    supabaseInstance.from<ITeamSize>('team_sizes').select('id,name'),
    supabaseInstance.from<IClientType>('client_types').select('id,name'),
    supabaseInstance.from<IFocusMarket>('focus_markets').select('id,name'),
    supabaseInstance.from<IStartupSector>('startup_sectors').select('id,name'),
    supabaseInstance.from<IInvestmentSize>('investment_sizes').select('id,name'),
    supabaseInstance.from<IIndustrialSector>('industrial_sectors').select('id,name'),
    supabaseInstance.from<IInvestorDemandType>('investor_demand_types').select('id,name'),
    supabaseInstance.from<IInvestmentStageType>('investment_stage_types').select('id,name'),
    supabaseInstance.from<IInvestorProfileType>('investor_profile_types').select('id,name'),
    supabaseInstance
      .from<IStartupProfileCreatorType>('startup_profile_creator_types')
      .select('id,name'),
  ]);

  console.log(result.profileData);

  return {
    props: {
      teamSizes,
      clientTypes,
      focusMarkets,
      startupSectors,
      investmentSizes,
      industrialSectors,
      plans: sortedPlans,
      investorDemandTypes,
      investmentStageTypes,
      investorProfileTypes,
      startupProfileCreatorTypes,
      clientTypeId: result.profileData.client_type_id,
    },
  };
};
