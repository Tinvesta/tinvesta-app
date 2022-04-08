import { IClientType } from '@interfaces';

import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';

export interface IDesktopOnboardingStepTwoProps {
  clientTypes: IClientType[];
  onContinueButtonClick: (data: IDesktopOnboardingStepTwoData) => void;
}
