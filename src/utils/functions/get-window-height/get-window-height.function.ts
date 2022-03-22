export const getWindowHeight = (): number =>
  (typeof window !== 'undefined' &&
    (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)) ||
  0;
