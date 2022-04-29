import { IStartupProfileCreatorType, ITeamSize } from '@interfaces';

import { IMobileOnboardingStepFiveStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepFiveStartupProps {
  defaultValues?: IMobileOnboardingStepFiveStartupData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepFiveStartupData) => void;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  teamSizes: ITeamSize[];
}
