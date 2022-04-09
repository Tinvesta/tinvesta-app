import { IInvestmentSize, IInvestmentStageType, ITeamSize } from '@interfaces';

import { IDesktopOnboardingStepFourInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFourInvestorProps {
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  onContinueButtonClick: (data: IDesktopOnboardingStepFourInvestorData) => void;
  teamSizes: ITeamSize[];
}
