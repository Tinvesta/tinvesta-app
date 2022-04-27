import { IMobileOnboardingStepTwoData } from '../../onboarding.types';

export const defaultMobileOnboardingStepTwoFormData: IMobileOnboardingStepTwoData = {
  contactEmail: '',
  companyName: '',
  clientTypeId: '',
};

export const translationStrings = [
  'common.buttons.continue',
  'common.client.types.startup',
  'common.client.types.investor',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.two.heading',
  'component.mobile.onboarding.step.two.profile.type.field.label',
  'component.mobile.onboarding.step.two.contact.email.field.label',
  'component.mobile.onboarding.step.two.contact.email.field.max.length.error',
  'component.mobile.onboarding.step.two.contact.email.field.pattern.match.error',
  'component.mobile.onboarding.step.two.company.name.field.label',
  'component.mobile.onboarding.step.two.company.name.field.max.length.error',
] as const;
