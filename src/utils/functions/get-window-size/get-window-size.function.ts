import getClientWindowWidth from 'get-client-window-width';

import { getWindowHeight } from '@utils';

export const getWindowSize = () => ({
  height: getWindowHeight(),
  width: getClientWindowWidth(),
});
