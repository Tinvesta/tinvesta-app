import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IPair,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

export interface IPairDetailsPreviewModalContentProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  onCloseIconClick: () => void;
  onVote: (profileId: string, vote: boolean) => void;
  selectedProfile?: IPair;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
