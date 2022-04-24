import commonTranslations from './common.translations';
import desktopOnboardingStepFourStartupTranslations from './desktop-onboarding-step-four-startup.translations';
import desktopOnboardingStepOneTranslations from './desktop-onboarding-step-one.translations';
import desktopOnboardingStepThreeStartupTranslations from './desktop-onboarding-step-three-startup.translations';
import desktopOnboardingStepTwoTranslations from './desktop-onboarding-step-two.translations';
import locationAutocompleteTranslations from './location-autocomplete.translations';
import uploadImagesTranslations from './upload-images.translations';

export default {
  ...commonTranslations,
  ...uploadImagesTranslations,
  ...locationAutocompleteTranslations,
  ...desktopOnboardingStepOneTranslations,
  ...desktopOnboardingStepTwoTranslations,
  ...desktopOnboardingStepFourStartupTranslations,
  ...desktopOnboardingStepThreeStartupTranslations,
};
