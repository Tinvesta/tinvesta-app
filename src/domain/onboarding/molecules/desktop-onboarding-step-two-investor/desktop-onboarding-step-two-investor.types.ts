import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IDesktopOnboardingInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepTwoInvestorProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  onContinueButtonClick: (data: IDesktopOnboardingInvestorData) => void;
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
