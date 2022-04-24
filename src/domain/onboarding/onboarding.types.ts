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

export interface IDesktopOnboardingStepOneData {
  companyName: string;
  contactEmail: string;
  firstName: string;
  lastName: string;
  location: string;
}

export interface IDesktopOnboardingStepTwoData {
  clientTypeId: string | number;
  images: string[];
  whatYouAreLookingFor: string;
}

export interface IDesktopOnboardingStepThreeStartupData {
  focusMarketIds: number[];
  industrialSectorIds: number[];
  startupProfileCreatorTypeId: string | number;
  startupSectorIds: number[];
  teamSizeId: string | number;
}

export interface IDesktopOnboardingStepFourStartupData {
  investmentSizeIds: number[];
  investmentStageTypeIds: number[];
  whatYouAreLookingFor: string;
}

export interface IDesktopOnboardingStepFiveStartupData {
  missionStatement: string;
  startupClaim: string;
  visionStatement: string;
}

export interface IDesktopOnboardingStepThreeInvestorData {
  focusMarketIds: number[];
  industrialSectorIds: number[];
  investorProfileTypeId: string | number;
  startupSectorIds: number[];
}

export interface IDesktopOnboardingStepFourInvestorData {
  investmentSizeIds: number[];
  investmentStageTypeIds: number[];
  teamSizeIds: number[];
}

export interface IDesktopOnboardingStepFiveInvestorData {
  investorDemandTypeIds: number[];
  whatYouAreLookingFor: string;
}
