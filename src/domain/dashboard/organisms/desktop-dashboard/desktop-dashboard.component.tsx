import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { useUser } from '@utils';

import { getStartupsAction } from '../../api';
import { DesktopDashboardLayout } from '../../atoms';

export const DesktopDashboard = (): JSX.Element => {
  const { logout } = useUser();
  const { mutate: mutateGetStartupsAction } = useMutation(getStartupsAction);

  useEffect(() => {
    mutateGetStartupsAction();
  }, []);

  return (
    <DesktopDashboardLayout
      asideChildren={<div>aside</div>}
      contentChildren={
        <>
          <Typography variant="h1">Dashboard</Typography>
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        </>
      }
    />
  );
};
