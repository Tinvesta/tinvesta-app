import { useState } from 'react';

import { tryCatchWrapper, tryParseJson } from '@utils';

export const useSessionStorage = <T>(
  key: string,
  initialValue?: T,
): [T | undefined, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    const item = tryCatchWrapper(
      () => sessionStorage.getItem(key),
      (_error) => console.error('[use-session-storage]', _error),
    );

    return tryParseJson<T>(item ?? '') ?? initialValue;
  });

  const setValue = (value: T) => {
    tryCatchWrapper(
      () => {
        sessionStorage.setItem(key, JSON.stringify(value));

        setStoredValue(value);
      },
      (_error) => console.error('[use-session-storage]', _error),
    );
  };

  return [storedValue, setValue];
};
