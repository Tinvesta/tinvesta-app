import { IInvestorDemandType, ITeamSize } from '@interfaces';

import { IMobileOnboardingStepEightInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepEightInvestorProps {
  defaultValues?: IMobileOnboardingStepEightInvestorData;
  investorDemandTypes: IInvestorDemandType[];
  onContinueButtonClick: (data: IMobileOnboardingStepEightInvestorData) => void;
  teamSizes: ITeamSize[];
}
