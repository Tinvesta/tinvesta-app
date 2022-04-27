import { IMobileOnboardingStepFiveStartupData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepFiveStartupFormData: IMobileOnboardingStepFiveStartupData =
  {
    teamSizeId: '',
    startupProfileCreatorTypeId: '',
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.focus.markets.b2b',
  'common.focus.markets.b2c',
  'common.team.sizes.very.small',
  'common.team.sizes.small',
  'common.team.sizes.medium',
  'common.team.sizes.large',
  'common.startup.profile.creator.types.founder',
  'common.startup.profile.creator.types.employee',
  'common.startup.profile.creator.types.co.founder',

  'component.mobile.onboarding.step.five.startup.heading',
  'component.mobile.onboarding.step.five.startup.your.position.field.label',
  'component.mobile.onboarding.step.five.startup.focus.market.field.label',
  'component.mobile.onboarding.step.five.startup.team.size.field.label',
] as const;
