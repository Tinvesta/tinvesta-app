import { FormControl, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

import { HorizontalButtonGroup } from '@ui';

import { IHorizontalButtonGroupWithControllerProps } from './horizontal-button-group-with-controller.types';

export const HorizontalButtonGroupWithController = <TFieldValues,>({
  horizontalButtonGroupProps,
  controllerProps,
  formControlProps = {},
}: IHorizontalButtonGroupWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <FormControl variant="outlined" {...formControlProps} error={invalid}>
        <HorizontalButtonGroup
          {...horizontalButtonGroupProps}
          {...field}
          // @ts-expect-error
          activeItem={field.value}
          id={field.name}
          onOptionClick={field.onChange}
        />
        <FormHelperText>{error?.message || ' '}</FormHelperText>
      </FormControl>
    )}
  />
);
