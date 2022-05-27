import { IConfirmationModalOptions } from '@ui';

export const mergeOptions = (
  baseOptions: IConfirmationModalOptions,
  defaultOptions: IConfirmationModalOptions,
  options: IConfirmationModalOptions,
) => {
  const modalProps = {
    ...(defaultOptions.modalProps || baseOptions.modalProps),
    ...options.modalProps,
  };

  const confirmationButtonProps = {
    ...(defaultOptions.confirmationButtonProps || baseOptions.confirmationButtonProps),
    ...options.confirmationButtonProps,
  };

  const cancellationButtonProps = {
    ...(defaultOptions.cancellationButtonProps || baseOptions.cancellationButtonProps),
    ...options.cancellationButtonProps,
  };

  const contentProps = {
    ...(defaultOptions.contentProps || baseOptions.contentProps),
    ...options.contentProps,
  };

  return {
    ...baseOptions,
    ...defaultOptions,
    ...options,
    modalProps,
    contentProps,
    confirmationButtonProps,
    cancellationButtonProps,
  };
};
