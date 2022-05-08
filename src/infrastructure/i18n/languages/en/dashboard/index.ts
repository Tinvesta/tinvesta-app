import commonTranslations from './common.translations';
import likesTranslations from './likes';
import matchesTranslations from './matches';
import profileTranslations from './profile';

export default {
  ...likesTranslations,
  ...commonTranslations,
  ...profileTranslations,
  ...matchesTranslations,
};
