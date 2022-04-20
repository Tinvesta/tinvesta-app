import {
  EClientType,
  EFocusMarket,
  EIndustrialSector,
  EInvestmentSize,
  EInvestmentStageType,
  EInvestorDemandType,
  EInvestorProfileType,
  EStartupProfileCreatorType,
  EStartupSector,
  ETeamSize,
} from '@enums';

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

export interface IDiscoverRecord {
  avatars: {
    avatarPublicUrl: string;
  };
  companyName: string;
  firstName: string;
  id: string;
  investorProfileTypeId: string | null;
  lastName: string;
  location: string;
  missionStatement: string | null;
  profilesFocusMarkets: number[];
  profilesIndustrialSectors: number[];
  profilesInvestmentSizes: number[];
  profilesInvestmentStageTypes: number[];
  profilesInvestorDemandTypes: number[];
  profilesStartupSectors: number[];
  profilesTeamSizes: number[];
  startupClaim: string | null;
  startupProfileCreatorTypeId: string | null;
  visionStatement: string | null;
  whatYouAreLookingFor: string;
}
