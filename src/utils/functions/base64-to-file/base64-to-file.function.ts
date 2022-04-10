import { getFileExtensionFromBase64 } from '@utils';

export const base64ToFile = (base64String: string, fileName: string) => {
  const fileExtension = getFileExtensionFromBase64(base64String);

  if (!fileExtension) {
    return null;
  }

  return new File(
    [Buffer.from(base64String.replace(`data:image/${fileExtension};base64,`, ''), 'base64')],
    fileName,
    { type: `image/${fileExtension}` },
  );
};
