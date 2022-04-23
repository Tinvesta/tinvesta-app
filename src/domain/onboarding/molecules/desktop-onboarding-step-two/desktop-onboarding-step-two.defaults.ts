import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';

export const defaultDesktopOnboardingStepTwoFormData: IDesktopOnboardingStepTwoData = {
  clientTypeId: '',
  firstImage: '',
  secondImage: '',
  thirdImage: '',
  fourthImage: '',
};

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.form.field.error.required',

  'component.desktop.onboarding.step.two.heading',
  'component.desktop.onboarding.step.two.subheading',
  'component.desktop.onboarding.step.two.profile.type.field.label',
  'component.desktop.onboarding.step.two.info.upload.at.least.one.image',
] as const;
