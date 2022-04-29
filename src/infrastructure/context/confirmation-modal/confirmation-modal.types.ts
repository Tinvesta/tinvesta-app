import { IConfirmationModalOptions } from '@ui';

export interface IConfirmationModalContextValue {
  confirm: (options?: IConfirmationModalOptions) => Promise<unknown>;
}
