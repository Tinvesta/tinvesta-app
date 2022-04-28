import { IMobileOnboardingStepSevenInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepSevenInvestorFormData: IMobileOnboardingStepSevenInvestorData =
  {
    investmentSizeIds: [],
    investmentStageTypeIds: [],
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
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

  'component.mobile.onboarding.step.seven.investor.heading',
  'component.mobile.onboarding.step.seven.investor.investment.size.field.label',
  'component.mobile.onboarding.step.seven.investor.investment.stage.field.label',
] as const;
