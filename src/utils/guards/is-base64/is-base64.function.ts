import { isString } from '@utils';

const BASE64_REGEX =
  /^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[\dA-Za-z]|[+/])+={0,2}/;

export const isBase64 = (base64String: string) => {
  if (!isString(base64String)) {
    return false;
  }

  return BASE64_REGEX.test(base64String);
};
