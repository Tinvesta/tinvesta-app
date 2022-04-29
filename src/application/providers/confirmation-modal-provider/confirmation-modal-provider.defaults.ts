import { IConfirmationModalOptions } from '@ui';

export const DEFAULT_OPTIONS: IConfirmationModalOptions = {
  content: null,
  titleProps: {},
  description: '',
  contentProps: {},
  title: 'Are you sure?',
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
  confirmationButtonProps: {},
  cancellationButtonProps: {},
};
