import { Typography } from '@mui/material';

import { CenterBlockLayout } from '@ui';

import S from './error.styles';
import { IErrorProps } from './error.types';

export const Error = ({ children, code, message }: IErrorProps): JSX.Element => (
  <CenterBlockLayout>
    <Typography fontWeight={900} variant="h1">
      {code}
    </Typography>
    <Typography variant="h5">{message}</Typography>
    <S.StyledActionsWrapper>{children}</S.StyledActionsWrapper>
  </CenterBlockLayout>
);
