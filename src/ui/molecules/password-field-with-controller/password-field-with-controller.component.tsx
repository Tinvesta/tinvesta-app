import { Controller } from 'react-hook-form';

import { PasswordField } from '@ui';

import { IPasswordFieldWithControllerProps } from './password-field-with-controller.types';

export const PasswordFieldWithController = <TFieldValues,>({
  controllerProps,
  inputProps,
}: IPasswordFieldWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { invalid } }) => (
      <PasswordField
        {...inputProps}
        {...field}
        error={invalid}
        id={field.name}
        value={field.value}
      />
    )}
  />
);
