import { Typography } from '@mui/material';

import { CenterBlockLayout } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './error.styles';
import { IErrorProps } from './error.types';

export const Error = ({ children, code, message }: IErrorProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  return (
    <CenterBlockLayout>
      <Typography fontWeight={900} variant={deviceData.isSmallerThanXS ? 'h2' : 'h1'}>
        {code}
      </Typography>
      <Typography align="center" variant={deviceData.isSmallerThanXS ? 'body2' : 'h6'}>
        {message}
      </Typography>
      <S.StyledActionsWrapper>{children}</S.StyledActionsWrapper>
    </CenterBlockLayout>
  );
};
