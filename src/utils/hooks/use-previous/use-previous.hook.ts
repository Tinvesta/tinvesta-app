import { MutableRefObject, useEffect, useRef } from 'react';

export const usePrevious = <T = unknown>(state: T): T | undefined => {
  const ref: MutableRefObject<T | undefined> = useRef();

  useEffect(() => {
    ref.current = state;
  }, [JSON.stringify(state)]);

  return ref.current;
};
