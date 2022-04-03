import { GetServerSideProps } from 'next';

import { Onboarding } from '@domain';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import {
  IClientType,
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorProfileType,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import S from './onboarding.styles';
import { IOnboardingPageProps } from './onboarding.types';

export const OnboardingPage = (props: IOnboardingPageProps): JSX.Element => {
  console.log(props);

  return (
    <S.StyledWrapper>
      <Onboarding />
    </S.StyledWrapper>
  );
};

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

  const [
    { data: teamSizes },
    { data: clientTypes },
    { data: focusMarkets },
    { data: startupSectors },
    { data: investmentSizes },
    { data: industrialSectors },
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
      investmentStageTypes,
      investorProfileTypes,
      startupProfileCreatorTypes,
    },
  };
};
