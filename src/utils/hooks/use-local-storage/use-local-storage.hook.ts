import { useState } from 'react';

import { tryCatchWrapper, tryParseJson } from '@utils';

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T | undefined, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    const item = tryCatchWrapper(
      () => localStorage.getItem(key),
      (_error) => console.error('[use-local-storage]', _error),
    );

    return tryParseJson<T>(item ?? '') ?? initialValue;
  });

  const setValue = (value: T) => {
    tryCatchWrapper(
      () => {
        localStorage.setItem(key, JSON.stringify(value));

        setStoredValue(value);
      },
      (_error) => console.error('[use-local-storage]', _error),
    );
  };

  return [storedValue, setValue];
};
