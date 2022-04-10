import { IInvestmentSize, IInvestmentStageType, ITeamSize } from '@interfaces';

import { IDesktopOnboardingStepFourInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFourInvestorProps {
  defaultValues?: IDesktopOnboardingStepFourInvestorData;
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepFourInvestorData) => void;
  teamSizes: ITeamSize[];
}
