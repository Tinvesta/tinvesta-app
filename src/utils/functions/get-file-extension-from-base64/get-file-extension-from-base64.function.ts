import { isBase64 } from '@utils';

export const getFileExtensionFromBase64 = (base64String: string) => {
  if (!isBase64(base64String)) {
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
