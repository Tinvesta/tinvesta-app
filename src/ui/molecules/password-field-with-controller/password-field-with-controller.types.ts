import { UseControllerProps } from 'react-hook-form';

import { TPasswordFieldProps } from '@ui';

export interface IPasswordFieldWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  inputProps?: TPasswordFieldProps;
}
