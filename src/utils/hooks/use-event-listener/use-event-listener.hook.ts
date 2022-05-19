import { MutableRefObject, useEffect, useRef } from 'react';

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (this: Window, ev: WindowEventMap[K]) => void,
  element: Window | undefined = typeof window !== 'undefined' ? window : undefined,
): void {
  const savedHandler: MutableRefObject<Function | undefined> = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element?.addEventListener;

    if (!isSupported) return;

    const eventListener = (event: WindowEventMap[K]) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventName, eventListener, true);

    return () => {
      element.removeEventListener(eventName, eventListener, true);
    };
  }, [eventName, element]);
}
