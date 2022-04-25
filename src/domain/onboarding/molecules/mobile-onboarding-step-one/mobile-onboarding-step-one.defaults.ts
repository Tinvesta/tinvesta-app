import { IMobileOnboardingStepOneData } from '../../onboarding.types';

export const defaultMobileOnboardingStepOneFormData: IMobileOnboardingStepOneData = {
  lastName: '',
  firstName: '',
  contactEmail: '',
};

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.single.word',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.one.heading',
  'component.mobile.onboarding.step.one.subheading',
  'component.mobile.onboarding.step.one.first.name.field.label',
  'component.mobile.onboarding.step.one.first.name.field.max.length.error',
  'component.mobile.onboarding.step.one.last.name.field.label',
  'component.mobile.onboarding.step.one.last.name.field.max.length.error',
  'component.mobile.onboarding.step.one.contact.email.field.label',
  'component.mobile.onboarding.step.one.contact.email.field.max.length.error',
  'component.mobile.onboarding.step.one.contact.email.field.pattern.match.error',
] as const;
