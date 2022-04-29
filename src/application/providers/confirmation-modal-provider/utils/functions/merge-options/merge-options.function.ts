import { IConfirmationModalOptions } from '@ui';

export const mergeOptions = (
  baseOptions: IConfirmationModalOptions,
  defaultOptions: IConfirmationModalOptions,
  options: IConfirmationModalOptions,
) => {
  const confirmationButtonProps = {
    ...(defaultOptions.confirmationButtonProps || baseOptions.confirmationButtonProps),
    ...options.confirmationButtonProps,
  };

  const cancellationButtonProps = {
    ...(defaultOptions.cancellationButtonProps || baseOptions.cancellationButtonProps),
    ...options.cancellationButtonProps,
  };

  const titleProps = {
    ...(defaultOptions.titleProps || baseOptions.titleProps),
    ...options.titleProps,
  };

  const contentProps = {
    ...(defaultOptions.contentProps || baseOptions.contentProps),
    ...options.contentProps,
  };

  return {
    ...baseOptions,
    ...defaultOptions,
    ...options,
    titleProps,
    contentProps,
    confirmationButtonProps,
    cancellationButtonProps,
  };
};
