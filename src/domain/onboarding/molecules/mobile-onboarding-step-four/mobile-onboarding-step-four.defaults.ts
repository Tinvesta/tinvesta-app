import { IMobileOnboardingStepFourData } from '../../onboarding.types';

export const defaultMobileOnboardingStepFourFormData: IMobileOnboardingStepFourData = {
  images: [],
};

export const translationStrings = [
  'common.buttons.continue',

  'component.mobile.onboarding.step.four.heading',
  'component.mobile.onboarding.step.four.images.field.min.length.error',
] as const;
