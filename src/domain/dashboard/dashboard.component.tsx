import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { useUser } from '@utils';

import { getStartupsAction } from './api';
import S from './dashboard.styles';

export const Dashboard = (): JSX.Element => {
  const { logout } = useUser();
  const { mutate: mutateGetStartupsAction } = useMutation(getStartupsAction);

  useEffect(() => {
    mutateGetStartupsAction();
  }, []);

  return (
    <S.StyledWrapper>
      <Typography variant="h1">Dashboard</Typography>
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
    </S.StyledWrapper>
  );
};
