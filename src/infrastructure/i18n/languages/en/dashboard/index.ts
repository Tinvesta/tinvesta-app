import commonTranslations from './common.translations';
import discoverTranslations from './discover';
import likesTranslations from './likes';
import matchesTranslations from './matches';
import profileTranslations from './profile';

export default {
  ...likesTranslations,
  ...commonTranslations,
  ...profileTranslations,
  ...matchesTranslations,
  ...discoverTranslations,
};
