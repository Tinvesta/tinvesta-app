import { ReactNode } from 'react';

import { IConfirmationModalOptions } from '@ui';

export interface IConfirmationModalProviderProps {
  children: ReactNode | ReactNode[];
  defaultOptions?: IConfirmationModalOptions;
}
