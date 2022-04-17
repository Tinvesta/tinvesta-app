import { isString, tryCatchWrapper } from '@utils';

export function tryParseJson<T = unknown>(jsonString: string): T | null {
  if (!isString(jsonString)) {
    return null;
  }

  return tryCatchWrapper(() => JSON.parse(jsonString)) ?? null;
}
