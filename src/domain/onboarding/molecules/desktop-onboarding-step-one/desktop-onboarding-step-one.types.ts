import { IClientType } from '@interfaces';

import { IDesktopOnboardingBaseData } from '../../onboarding.types';

export interface IDesktopOnboardingStepOneProps {
  clientTypes: IClientType[];
  onContinueButtonClick: (data: IDesktopOnboardingBaseData) => void;
}
