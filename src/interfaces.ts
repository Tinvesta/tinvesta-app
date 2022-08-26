import {
  EClientType,
  ECurrency,
  EFocusMarket,
  EIndustrialSector,
  EInvestmentSize,
  EInvestmentStageType,
  EInvestorDemandType,
  EInvestorProfileType,
  EStartupProfileCreatorType,
  EStartupSector,
  ESubscriptionInterval,
  ESubscriptionName,
  ETeamSize,
} from './enums';

export interface IClientType {
  id: string;
  name: EClientType;
}

export interface IFocusMarket {
  id: string;
  name: EFocusMarket;
}

export interface IIndustrialSector {
  id: string;
  name: EIndustrialSector;
}

export interface IInvestmentSize {
  id: string;
  name: EInvestmentSize;
}

export interface IInvestmentStageType {
  id: string;
  name: EInvestmentStageType;
}

export interface IInvestorProfileType {
  id: string;
  name: EInvestorProfileType;
}

export interface IStartupProfileCreatorType {
  id: string;
  name: EStartupProfileCreatorType;
}

export interface IStartupSector {
  id: string;
  name: EStartupSector;
}

export interface ITeamSize {
  id: string;
  name: ETeamSize;
}

export interface IInvestorDemandType {
  id: string;
  name: EInvestorDemandType;
}

export interface IProfileDetails {
  avatars: string[];
  clientTypeId: number;
  companyName: string;
  contactEmail: string;
  firstName: string;
  focusMarkets: number[];
  id: string;
  industrialSectors: number[];
  interval: string | null;
  investmentSizes: number[];
  investmentStageTypes: number[];
  investorDemandTypes: number[];
  investorProfileTypeId: number | null;
  isSubscribed: boolean;
  lastName: string;
  location: string;
  missionStatement: string | null;
  profileAvatarUrl: string;
  startupClaim: string | null;
  startupProfileCreatorTypeId: number | null;
  startupSectors: number[];
  teamSizes: number[];
  visionStatement: string | null;
  whyStartupShouldMatchWithYou: string;
}

export interface ISubscriptionPlan {
  currency: ECurrency;
  id: string;
  interval: ESubscriptionInterval;
  name: ESubscriptionName;
  price: number;
}

export interface IPair {
  avatars: string[];
  companyName: string;
  firstName: string;
  id: string;
  lastName: string;
}

export interface ILike extends IPair {
  likeId: string;
}

export interface IMatch extends IPair {
  contactEmail: string;
  matchId: string;
}
