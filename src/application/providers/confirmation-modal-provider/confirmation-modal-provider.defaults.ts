import { IConfirmationModalOptions } from '@ui';

export const DEFAULT_OPTIONS: IConfirmationModalOptions = {
  content: null,
  description: '',
  contentProps: {},
  title: 'Are you sure?',
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
  confirmationButtonProps: {},
  cancellationButtonProps: {},
};
