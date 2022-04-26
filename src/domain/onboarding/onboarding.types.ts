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
  whatAreYouLookingFor: string;
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
  startupClaim: string;
}

export interface IDesktopOnboardingStepFiveStartupData {
  missionStatement: string;
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
  whyStartupShouldMatchWithYou: string;
}

export interface IMobileOnboardingStepOneData {
  firstName: string;
  lastName: string;
}

export interface IMobileOnboardingStepTwoData {
  clientTypeId: string | number;
  companyName: string;
  contactEmail: string;
}

export interface IMobileOnboardingStepThreeData {
  location: string;
  whatAreYouLookingFor: string;
}

export interface IMobileOnboardingStepFourData {
  images: string[];
}

export interface IVariables {
  contactEmail: string | undefined;
  fullName: string | undefined;
}
