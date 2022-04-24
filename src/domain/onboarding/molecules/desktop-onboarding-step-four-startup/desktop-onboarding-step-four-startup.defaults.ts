import { IDesktopOnboardingStepFourStartupData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultDesktopOnboardingStepFourStartupFormData: IDesktopOnboardingStepFourStartupData =
  {
    startupClaim: '',
    investmentSizeIds: [],
    investmentStageTypeIds: [],
  };

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',
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

  'component.desktop.onboarding.step.four.startup.heading',
  'component.desktop.onboarding.step.four.startup.subheading',
  'component.desktop.onboarding.step.four.startup.startup.claim.field.label',
  'component.desktop.onboarding.step.four.startup.investment.size.field.label',
  'component.desktop.onboarding.step.four.startup.investment.stage.field.label',
  'component.desktop.onboarding.step.four.startup.startup.claim.field.placeholder',
  'component.desktop.onboarding.step.four.startup.startup.claim.field.max.length.error',
] as const;
