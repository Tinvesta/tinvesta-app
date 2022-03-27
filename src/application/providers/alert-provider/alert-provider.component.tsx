import { Alert, AlertColor, Snackbar } from '@mui/material';
import { useState } from 'react';

import { AlertContext } from '@infrastructure';

import { IAlert, IAlertProviderProps } from './alert-provider.types';

export const AlertProvider = ({ children }: IAlertProviderProps): JSX.Element => {
  const [currentAlert, setCurrentAlert] = useState<IAlert | null>(null);

  const showAlert = (type: AlertColor) => (message: string) => setCurrentAlert({ message, type });

  const showSuccessAlert = showAlert('success');
  const showInfoAlert = showAlert('info');
  const showWarningAlert = showAlert('warning');
  const showErrorAlert = showAlert('error');

  const handleClose = () => setCurrentAlert(null);

  return (
    <AlertContext.Provider
      value={{
        showErrorAlert,
        showSuccessAlert,
        showInfoAlert,
        showWarningAlert,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        open={!!currentAlert}
        onClose={handleClose}
      >
        <Alert severity={currentAlert?.type} variant="filled">
          {currentAlert?.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
