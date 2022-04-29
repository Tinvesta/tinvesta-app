import { IIndustrialSector, IStartupSector } from '@interfaces';

import { IMobileOnboardingStepSixStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepSixStartupProps {
  defaultValues?: IMobileOnboardingStepSixStartupData;
  industrialSectors: IIndustrialSector[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepSixStartupData) => void;
  startupSectors: IStartupSector[];
}
