import { IDesktopOnboardingStepOneData } from '../../onboarding.types';

export const defaultDesktopOnboardingStepOneFormData: IDesktopOnboardingStepOneData = {
  location: '',
  lastName: '',
  firstName: '',
  companyName: '',
  contactEmail: '',
};

export const translationStrings = [
  'common.buttons.quit',
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.single.word',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.desktop.onboarding.step.one.heading',
  'component.desktop.onboarding.step.one.subheading',
  'component.desktop.onboarding.step.one.first.name.field.label',
  'component.desktop.onboarding.step.one.first.name.field.max.length.error',
  'component.desktop.onboarding.step.one.last.name.field.label',
  'component.desktop.onboarding.step.one.last.name.field.max.length.error',
  'component.desktop.onboarding.step.one.contact.email.field.label',
  'component.desktop.onboarding.step.one.contact.email.field.max.length.error',
  'component.desktop.onboarding.step.one.contact.email.field.pattern.match.error',
  'component.desktop.onboarding.step.one.company.name.field.label',
  'component.desktop.onboarding.step.one.company.name.field.max.length.error',
  'component.desktop.onboarding.step.one.location.field.label',
] as const;
