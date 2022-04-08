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

export interface IOnboardingProps {
  clientTypes: IClientType[];
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}

export interface IDesktopOnboardingBaseData {
  companyName: string;
  contactEmail: string;
  firstName: string;
  lastName: string;
  location: string;
}

export interface IDesktopOnboardingStartupData {
  focusMarketIds: number[];
  industrialSectorIds: number[];
  investmentSizeIds: number[];
  investmentStageTypeIds: number[];
  missionStatement: string;
  startupClaim: string;
  startupProfileCreatorTypeId: string | number;
  startupSectorIds: number[];
  teamSizeId: string | number;
  visionStatement: string;
  whatYouAreLookingFor: string;
}

export interface IDesktopOnboardingInvestorData {
  focusMarketIds: number[];
  industrialSectorIds: number[];
  investmentSizeIds: number[];
  investmentStageTypeIds: number[];
  investorDemandTypeIds: number[];
  investorProfileTypeId: string | number;
  startupSectorIds: number[];
  teamSizeIds: number[];
  whatYouAreLookingFor: string;
}
