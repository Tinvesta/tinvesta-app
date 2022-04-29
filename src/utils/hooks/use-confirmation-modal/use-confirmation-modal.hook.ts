import { useContext } from 'react';

import { ConfirmationModalContext } from '@infrastructure';

export const useConfirmationModal = () => {
  const confirmationModalContext = useContext(ConfirmationModalContext);

  if (!confirmationModalContext) {
    throw new Error(
      'ConfirmationModalContext is unavailable, make sure you are using ConfirmationModalProvider context.',
    );
  }

  return confirmationModalContext;
};
