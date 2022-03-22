export const getWindowWidth = (): number =>
  (typeof window !== 'undefined' &&
    (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)) ||
  0;
