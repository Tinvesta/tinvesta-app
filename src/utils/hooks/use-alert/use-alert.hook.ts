import { useContext } from 'react';

import { AlertContext } from '@infrastructure';

export const useAlert = () => {
  const alertContext = useContext(AlertContext);

  if (!alertContext) {
    throw new Error('AlertContext is unavailable, make sure you are using AlertProvider context.');
  }

  return alertContext;
};
