import { FormControlProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

import { IHorizontalButtonGroupProps } from '@ui';

export interface IHorizontalButtonGroupWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  formControlProps?: FormControlProps;
  horizontalButtonGroupProps: IHorizontalButtonGroupProps;
}
