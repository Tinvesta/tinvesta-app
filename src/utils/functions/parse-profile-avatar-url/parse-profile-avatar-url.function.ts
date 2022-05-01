import { isString } from '@utils';

export const parseProfileAvatarUrl = (profileAvatarUrl: string | undefined) => {
  if (!isString(profileAvatarUrl)) {
    return '';
  }

  return profileAvatarUrl.replace(/"/g, '');
};
