import { IMobileOnboardingStepFiveInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepFiveInvestorFormData: IMobileOnboardingStepFiveInvestorData =
  {
    investorProfileTypeId: '',
    focusMarketIds: [],
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.focus.markets.b2b',
  'common.focus.markets.b2c',
  'common.investor.profile.types.private',
  'common.investor.profile.types.corporate',
  'common.investor.profile.types.institutional',

  'component.mobile.onboarding.step.five.investor.heading',
  'component.mobile.onboarding.step.five.investor.your.position.field.label',
  'component.mobile.onboarding.step.five.investor.focus.market.field.label',
] as const;
