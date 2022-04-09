import { IFocusMarket, IIndustrialSector, IInvestorProfileType, IStartupSector } from '@interfaces';

import { IDesktopOnboardingStepThreeInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepThreeInvestorProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investorProfileTypes: IInvestorProfileType[];
  onContinueButtonClick: (data: IDesktopOnboardingStepThreeInvestorData) => void;
  startupSectors: IStartupSector[];
}
