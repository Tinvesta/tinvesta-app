import { FormControlProps } from '@mui/material';
import { FieldValues, UseControllerProps } from 'react-hook-form';

import { ISelectProps } from '@ui';

export interface ISelectWithControllerProps<TFieldValues extends FieldValues = FieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  formControlProps?: FormControlProps;
  selectProps: ISelectProps;
}
