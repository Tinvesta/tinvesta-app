import { IIndustrialSector, IStartupSector } from '@interfaces';

import { IMobileOnboardingStepSixInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepSixInvestorProps {
  defaultValues?: IMobileOnboardingStepSixInvestorData;
  industrialSectors: IIndustrialSector[];
  onContinueButtonClick: (data: IMobileOnboardingStepSixInvestorData) => void;
  startupSectors: IStartupSector[];
}
