import { IClientType } from '@interfaces';

import { IMobileOnboardingStepTwoData } from '../../onboarding.types';

export interface IMobileOnboardingStepTwoProps {
  clientTypes: IClientType[];
  defaultValues?: IMobileOnboardingStepTwoData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepTwoData) => void;
}
