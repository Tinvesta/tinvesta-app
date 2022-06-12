import commonTranslations from './common.translations';
import dashboardTranslations from './dashboard';
import errorPageTranslations from './error-page.translations';
import footerTranslations from './footer.translations';
import headerTranslations from './header.translations';
import homeTranslations from './home.translations';
import locationAutocompleteTranslations from './location-autocomplete.translations';
import offlineTranslations from './offline.translations';
import onboardingTranslations from './onboarding';
import profileDetailsPreviewTranslations from './profile-details-preview.translations';
import uploadImagesTranslations from './upload-images.translations';

export default {
  ...homeTranslations,
  ...commonTranslations,
  ...footerTranslations,
  ...headerTranslations,
  ...offlineTranslations,
  ...dashboardTranslations,
  ...errorPageTranslations,
  ...onboardingTranslations,
  ...uploadImagesTranslations,
  ...locationAutocompleteTranslations,
  ...profileDetailsPreviewTranslations,
};
