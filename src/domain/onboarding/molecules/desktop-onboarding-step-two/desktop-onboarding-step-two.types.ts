import { IClientType } from '@interfaces';

import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';

export interface IDesktopOnboardingStepTwoProps {
  clientTypes: IClientType[];
  defaultValues?: IDesktopOnboardingStepTwoData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepTwoData) => void;
}
