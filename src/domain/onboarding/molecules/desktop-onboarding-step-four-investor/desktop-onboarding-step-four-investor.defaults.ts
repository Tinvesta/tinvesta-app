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
  'common.investment.stage.types.idea',
  'common.investment.stage.types.seed',
  'common.investment.stage.types.growth',
  'common.investment.stage.types.series.a',
  'common.investment.stage.types.series.b',
  'common.investment.sizes.very.small',
  'common.investment.sizes.small',
  'common.investment.sizes.medium',
  'common.investment.sizes.large',
  'common.investment.sizes.very.large',
] as const;
