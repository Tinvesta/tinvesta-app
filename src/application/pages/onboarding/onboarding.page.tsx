import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Onboarding } from '@domain';

import { Loader } from '@ui';

import { useUser } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

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

import S from './onboarding.styles';
import { IOnboardingPageProps } from './onboarding.types';

export const OnboardingPage = (props: IOnboardingPageProps): JSX.Element => {
  const { isLoading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null && isLoading) {
      router.push(ERoutes.HOME);

      return;
    }

    if (!isLoading && user?.client_type_id) {
      router.push(ERoutes.DASHBOARD);
    }
  }, [user, isLoading]);

  const shouldRenderLoader = !user || isLoading || user?.client_type_id;

  return (
    <S.StyledWrapper>
      <Head>
        <title>Tinvesta</title>
      </Head>
      {shouldRenderLoader ? <Loader /> : <Onboarding {...props} />}
    </S.StyledWrapper>
  );
};

export const getStaticProps = async () => {
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

  return {
    props: {
      teamSizes,
      clientTypes,
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
