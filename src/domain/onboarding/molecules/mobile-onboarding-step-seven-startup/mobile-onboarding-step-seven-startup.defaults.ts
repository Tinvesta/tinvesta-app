import { IMobileOnboardingStepSevenStartupData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepSevenStartupFormData: IMobileOnboardingStepSevenStartupData =
  {
    focusMarketIds: [],
    investmentSizeIds: [],
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.focus.markets.b2b',
  'common.focus.markets.b2c',
  'common.investment.sizes.very.small',
  'common.investment.sizes.small',
  'common.investment.sizes.medium',
  'common.investment.sizes.large',
  'common.investment.sizes.very.large',

  'component.mobile.onboarding.step.seven.startup.heading',
  'component.mobile.onboarding.step.seven.startup.focus.market.field.label',
  'component.mobile.onboarding.step.seven.startup.investment.size.field.label',
] as const;
