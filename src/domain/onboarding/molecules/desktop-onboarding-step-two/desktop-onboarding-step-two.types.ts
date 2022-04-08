import { IClientType } from '@interfaces';

import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';

export interface IDesktopOnboardingStepTwoProps {
  clientTypes: IClientType[];
  onBackClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepTwoData) => void;
}
