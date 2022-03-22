import { getWindowHeight, getWindowWidth } from '@utils';

export const getWindowSize = () => ({
  width: getWindowWidth(),
  height: getWindowHeight(),
});
