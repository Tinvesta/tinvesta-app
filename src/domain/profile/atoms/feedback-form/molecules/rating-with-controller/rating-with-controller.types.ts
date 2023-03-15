import { RatingProps } from '@mui/material';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export interface IRatingWithControllerProps<TFieldValues extends FieldValues = FieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  ratingProps?: RatingProps;
}
