import isString from 'is-string';

export const parseProfileAvatarUrl = (profileAvatarUrl: string | undefined) => {
  if (!isString(profileAvatarUrl)) {
    return '';
  }

  return profileAvatarUrl.replace(/"/g, '');
};
