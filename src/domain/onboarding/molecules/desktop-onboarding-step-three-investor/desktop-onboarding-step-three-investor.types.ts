import { IFocusMarket, IIndustrialSector, IInvestorProfileType, IStartupSector } from '@interfaces';

import { IDesktopOnboardingStepThreeInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepThreeInvestorProps {
  defaultValues?: IDesktopOnboardingStepThreeInvestorData;
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investorProfileTypes: IInvestorProfileType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepThreeInvestorData) => void;
  startupSectors: IStartupSector[];
}
