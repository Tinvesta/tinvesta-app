import { FormControlProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

import { ISelectProps } from '@ui';

export interface ISelectWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  formControlProps?: FormControlProps;
  selectProps: ISelectProps;
}
