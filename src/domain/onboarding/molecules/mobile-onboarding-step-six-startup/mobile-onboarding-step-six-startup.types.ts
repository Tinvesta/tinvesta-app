import { IIndustrialSector, IStartupSector } from '@interfaces';

import { IMobileOnboardingStepSixStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepSixStartupProps {
  defaultValues?: IMobileOnboardingStepSixStartupData;
  industrialSectors: IIndustrialSector[];
  onContinueButtonClick: (data: IMobileOnboardingStepSixStartupData) => void;
  startupSectors: IStartupSector[];
}
