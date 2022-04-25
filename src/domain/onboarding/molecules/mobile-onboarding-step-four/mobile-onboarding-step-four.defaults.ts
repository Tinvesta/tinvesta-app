import { IMobileOnboardingStepFourData } from '../../onboarding.types';

export const defaultMobileOnboardingStepFourFormData: IMobileOnboardingStepFourData = {
  images: [],
};

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.single.word',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.four.heading',
  'component.mobile.onboarding.step.four.subheading',
  'component.mobile.onboarding.step.four.images.field.min.length.error',
] as const;
