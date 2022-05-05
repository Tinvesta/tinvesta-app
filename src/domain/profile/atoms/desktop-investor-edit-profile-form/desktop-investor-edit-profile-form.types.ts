import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IProfileDetails,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

export interface IDesktopInvestorEditProfileFormProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  profileDetails: IProfileDetails | undefined;
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
