import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Likes } from '@domain';

import { Loading } from '@ui';

import { useDeviceDetect, useUser } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import {
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
import { ILikesProps } from './likes.types';

export const LikesPage = (props: ILikesProps): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();

  useEffect(() => {
    if (user === null && isLoading) {
      router.push(ERoutes.HOME);

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

  console.log(props);

  return (
    <DashboardLayout>
      <Likes clientTypeId={user.client_type_id as number} {...props} />
    </DashboardLayout>
  );
};

export const getStaticProps = async () => {
  const [
    { data: teamSizes },
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

  return {
    props: {
      teamSizes,
      focusMarkets,
      startupSectors,
      investmentSizes,
      industrialSectors,
      investorDemandTypes,
      investmentStageTypes,
      investorProfileTypes,
      startupProfileCreatorTypes,
    },
  };
};
