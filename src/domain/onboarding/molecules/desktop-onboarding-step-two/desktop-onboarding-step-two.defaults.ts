import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';

export const defaultDesktopOnboardingStepTwoFormData: IDesktopOnboardingStepTwoData = {
  clientTypeId: '',
  images: [],
  whatAreYouLookingFor: '',
};

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.client.types.startup',
  'common.client.types.investor',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.desktop.onboarding.step.two.heading',
  'component.desktop.onboarding.step.two.subheading',
  'component.desktop.onboarding.step.two.profile.type.field.label',
  'component.desktop.onboarding.step.two.what.are.you.looking.for.field.label',
  'component.desktop.onboarding.step.two.what.are.you.looking.for.field.placeholder',
  'component.desktop.onboarding.step.two.what.are.you.looking.for.field.max.length.error',
  'component.desktop.onboarding.step.two.images.field.min.length.error',
] as const;
