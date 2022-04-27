import { IMobileOnboardingStepOneData } from '../../onboarding.types';

export const defaultMobileOnboardingStepOneFormData: IMobileOnboardingStepOneData = {
  lastName: '',
  firstName: '',
};

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.single.word',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.one.heading',
  'component.mobile.onboarding.step.one.first.name.field.label',
  'component.mobile.onboarding.step.one.first.name.field.max.length.error',
  'component.mobile.onboarding.step.one.last.name.field.label',
  'component.mobile.onboarding.step.one.last.name.field.max.length.error',
] as const;
