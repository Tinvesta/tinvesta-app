import { IFocusMarket, IStartupProfileCreatorType, IStartupSector } from '@interfaces';

import { IMobileOnboardingStepFiveStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepFiveStartupProps {
  defaultValues?: IMobileOnboardingStepFiveStartupData;
  focusMarkets: IFocusMarket[];
  onContinueButtonClick: (data: IMobileOnboardingStepFiveStartupData) => void;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
}
