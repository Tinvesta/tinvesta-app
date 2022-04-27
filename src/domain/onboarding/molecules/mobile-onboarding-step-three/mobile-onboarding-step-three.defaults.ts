import { IMobileOnboardingStepThreeData } from '../../onboarding.types';

export const defaultMobileOnboardingStepThreeFormData: IMobileOnboardingStepThreeData = {
  location: '',
  whatAreYouLookingFor: '',
};

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.three.heading',
  'component.mobile.onboarding.step.three.location.field.label',
  'component.mobile.onboarding.step.three.what.are.you.looking.for.field.label',
  'component.mobile.onboarding.step.three.what.are.you.looking.for.field.placeholder',
  'component.mobile.onboarding.step.three.what.are.you.looking.for.field.max.length.error',
] as const;
