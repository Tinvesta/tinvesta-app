import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IProfileDetails,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

export interface IProfileDetailsPreviewProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  profileDetails: IProfileDetails;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
