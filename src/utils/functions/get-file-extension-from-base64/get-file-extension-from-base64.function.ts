import { isString } from '@utils';

export const getFileExtensionFromBase64 = (base64String: string) => {
  if (!isString(base64String)) {
    return null;
  }

  const semicolonSplitResult = base64String.split(';');

  if (semicolonSplitResult.length === 0) {
    return null;
  }

  const slashSplitResult = semicolonSplitResult[0].split('/');

  if (slashSplitResult.length < 2) {
    return null;
  }

  return slashSplitResult[1];
};
