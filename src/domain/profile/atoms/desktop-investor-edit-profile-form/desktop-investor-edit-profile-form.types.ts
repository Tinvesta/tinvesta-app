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
