import { IDesktopOnboardingStepFourInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultDesktopOnboardingStepFourInvestorFormData: IDesktopOnboardingStepFourInvestorData =
  {
    teamSizeIds: [],
    investmentSizeIds: [],
    investmentStageTypeIds: [],
  };

export const translationStrings = [
  'common.team.sizes.very.small',
  'common.team.sizes.small',
  'common.team.sizes.medium',
  'common.team.sizes.large',
] as const;
