import { IMobileOnboardingStepEightStartupData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepEightStartupFormData: IMobileOnboardingStepEightStartupData =
  {
    startupClaim: '',
    investmentStageTypeIds: [],
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',
  'common.investment.stage.types.idea',
  'common.investment.stage.types.seed',
  'common.investment.stage.types.growth',
  'common.investment.stage.types.series.a',
  'common.investment.stage.types.series.b',

  'component.mobile.onboarding.step.eight.startup.heading',
  'component.mobile.onboarding.step.eight.startup.investment.stage.field.label',
  'component.mobile.onboarding.step.eight.startup.startup.claim.field.label',
  'component.mobile.onboarding.step.eight.startup.startup.claim.field.placeholder',
  'component.mobile.onboarding.step.eight.startup.startup.claim.field.max.length.error',
] as const;
