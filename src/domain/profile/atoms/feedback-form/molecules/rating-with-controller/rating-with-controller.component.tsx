import { Rating } from '@mui/material';
import { Controller } from 'react-hook-form';

import { IRatingWithControllerProps } from './rating-with-controller.types';

export const RatingWithController = <TFieldValues,>({
  controllerProps,
  ratingProps,
}: IRatingWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <Rating
        {...ratingProps}
        {...field}
        error={invalid}
        helperText={error?.message || ' '}
        id={field.name}
        // @ts-expect-error
        value={field.value}
        onChange={(_event, newValue) => field.onChange(newValue)}
      />
    )}
  />
);
