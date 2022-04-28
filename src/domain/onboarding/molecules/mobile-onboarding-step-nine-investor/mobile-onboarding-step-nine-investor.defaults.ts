import { IMobileOnboardingStepNineInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepNineInvestorFormData: IMobileOnboardingStepNineInvestorData =
  {
    whyStartupShouldMatchWithYou: '',
  };

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.nine.investor.heading',
  'component.mobile.onboarding.step.nine.investor.why.startup.should.match.with.you.field.label',
  'component.mobile.onboarding.step.nine.investor.why.startup.should.match.with.you.field.max.length.error',
] as const;
