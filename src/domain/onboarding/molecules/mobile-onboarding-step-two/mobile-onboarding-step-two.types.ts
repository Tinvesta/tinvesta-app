import { IClientType } from '@interfaces';

import { IMobileOnboardingStepTwoData } from '../../onboarding.types';

export interface IMobileOnboardingStepTwoProps {
  clientTypes: IClientType[];
  defaultValues?: IMobileOnboardingStepTwoData;
  onContinueButtonClick: (data: IMobileOnboardingStepTwoData) => void;
}
