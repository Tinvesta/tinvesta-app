import { useCallback, useState } from 'react';

import { ConfirmationModal } from '@ui';

import { ConfirmationModalContext } from '@infrastructure';

import { DEFAULT_OPTIONS } from './confirmation-modal-provider.defaults';
import { IConfirmationModalProviderProps } from './confirmation-modal-provider.types';
import { mergeOptions } from './utils';

export const ConfirmationModalProvider = ({
  children,
  defaultOptions = {},
}: IConfirmationModalProviderProps): JSX.Element => {
  const [resolveReject, setResolveReject] = useState<[Function?, Function?]>([]);
  const [options, setOptions] = useState({ ...DEFAULT_OPTIONS, ...defaultOptions });

  const [resolve, reject] = resolveReject;

  const confirm = useCallback(
    (options = {}) =>
      new Promise((resolve, reject) => {
        setOptions(mergeOptions(DEFAULT_OPTIONS, defaultOptions, options));
        setResolveReject([resolve, reject]);
      }),
    [defaultOptions],
  );

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    if (reject) {
      reject();
      handleClose();
    }
  }, [reject, handleClose]);

  const handleConfirm = useCallback(() => {
    if (resolve) {
      resolve();
      handleClose();
    }
  }, [resolve, handleClose]);

  return (
    <>
      <ConfirmationModalContext.Provider value={{ confirm }}>
        {children}
      </ConfirmationModalContext.Provider>
      <ConfirmationModal
        open={resolveReject.length === 2}
        options={options}
        onCancel={handleCancel}
        onClose={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
};
