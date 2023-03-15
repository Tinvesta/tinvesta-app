import { Rating } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

import { IRatingWithControllerProps } from './rating-with-controller.types';

export const RatingWithController = <TFieldValues extends FieldValues = FieldValues>({
  controllerProps,
  ratingProps,
}: IRatingWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field }) => (
      <Rating
        {...ratingProps}
        {...field}
        id={field.name}
        value={field.value}
        onChange={(_event, newValue) => field.onChange(newValue)}
      />
    )}
  />
);
