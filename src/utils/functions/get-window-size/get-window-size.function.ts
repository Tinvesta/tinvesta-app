import getClientWindowHeight from 'get-client-window-height';
import getClientWindowWidth from 'get-client-window-width';

export const getWindowSize = () => ({
  width: getClientWindowWidth(),
  height: getClientWindowHeight(),
});
