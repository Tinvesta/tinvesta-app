import {
  IFocusMarket,
  IIndustrialSector,
  IInvestorProfileType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IDesktopOnboardingInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepTwoInvestorProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investorProfileTypes: IInvestorProfileType[];
  onContinueButtonClick: (data: IDesktopOnboardingInvestorData) => void;
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
