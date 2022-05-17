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
  ISubscriptionPlan,
  ITeamSize,
} from '@interfaces';

export interface IProfileProps {
  clientTypeId: number;
  clientTypes: IClientType[];
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  plans: ISubscriptionPlan[];
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}

export interface IFormFieldsData {
  companyName: string;
  contactEmail: string;
  firstName: string;
  focusMarketIds: number[];
  images: string[];
  industrialSectorIds: number[];
  investmentSizeIds: number[];
  investmentStageTypeIds: number[];
  investorDemandTypeIds: number[];
  investorProfileTypeId: string | number;
  lastName: string;
  location: string;
  startupSectorIds: number[];
  teamSizeIds: number[];
  whyStartupShouldMatchWithYou: string;
}

export interface IEditProfileFormFieldsData {
  companyName: string;
  contactEmail: string;
  firstName: string;
  focusMarketIds: number[];
  imageKeys?: string[];
  images: string[];
  industrialSectorIds: number[];
  investmentSizeIds: number[];
  investmentStageTypeIds: number[];
  investorDemandTypeIds: number[];
  investorProfileTypeId: string | number;
  lastName: string;
  location: string;
  missionStatement: string;
  startupClaim: string;
  startupProfileCreatorTypeId: string | number;
  startupSectorIds: number[];
  teamSizeId: number | string;
  teamSizeIds: number[];
  visionStatement: string;
  whyStartupShouldMatchWithYou: string;
}

export interface IFeedbackFormFieldsData {
  message: string;
  rating: number;
}
