import {
  Close as CloseIcon,
  Done as DoneIcon,
  VisibilityOutlined as VisibilityIcon,
  VisibilityOffOutlined as VisibilityOffIcon,
} from '@mui/icons-material';
import { Icon, IconButton, InputAdornment, Typography } from '@mui/material';
import { ForwardedRef, MouseEvent, forwardRef, memo, useState } from 'react';

import S from './password-field.styles';
import { TPasswordFieldProps } from './password-field.types';

const handleMouseDownPassword = (event: MouseEvent) => event.preventDefault();

const PasswordFieldComponent = (
  {
    className,
    error,
    inputRef,
    validators,
    value,
    variant = 'outlined',
    ...restProps
  }: TPasswordFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((_prev) => !_prev);

  const shouldDisplayPasswordValidators = validators && validators.length > 0;

  return (
    <>
      <S.StyledTextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        error={error}
        inputRef={inputRef || ref}
        type={showPassword ? 'text' : 'password'}
        value={value}
        variant={variant}
        {...restProps}
      />
      {shouldDisplayPasswordValidators && (
        <S.StyledValidatorsContainer>
          {validators.map((_validator) => {
            const isValid = _validator.isValid(value);
            const color = isValid ? 'success' : 'error';
            const statusIcon = isValid ? <DoneIcon /> : <CloseIcon />;

            return (
              <Typography key={_validator.message} color={color} unselectable="on" variant="body2">
                <Icon color={color} fontSize="small">
                  {statusIcon}
                </Icon>{' '}
                {_validator.message}
              </Typography>
            );
          })}
        </S.StyledValidatorsContainer>
      )}
    </>
  );
};

export const PasswordField = memo(forwardRef(PasswordFieldComponent));
