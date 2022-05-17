import { RatingProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export interface IRatingWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  ratingProps?: RatingProps;
}
