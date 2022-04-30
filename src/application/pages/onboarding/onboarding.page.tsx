import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Onboarding } from '@domain';

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

export const OnboardingPage = (props: IOnboardingPageProps): JSX.Element => (
  <S.StyledWrapper>
    <Head>
      <title>Tinvesta</title>
    </Head>
    <Onboarding {...props} />
  </S.StyledWrapper>
);

// @ts-expect-error
export const getServerSideProps = async ({ req }: GetServerSideProps) => {
  const { user } = await supabaseInstance.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: ERoutes.HOME,
      },
      props: {},
    };
  }

  const { data: profileData } = await supabaseInstance
    .from('profiles')
    .select('client_type_id')
    .eq('id', user.id)
    .single();

  if (profileData.client_type_id) {
    return {
      redirect: {
        permanent: false,
        destination: ERoutes.DASHBOARD,
      },
      props: {},
    };
  }

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
