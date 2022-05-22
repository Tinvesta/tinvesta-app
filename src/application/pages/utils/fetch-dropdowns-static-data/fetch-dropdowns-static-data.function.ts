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

export const fetchDropdownsStaticData = async () => {
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
  };
};
