import { Button } from '@mui/material';

import { useUser } from '@utils';

import S from './dashboard.styles';

export const Dashboard = (): JSX.Element => {
  const { logout } = useUser();

  return (
    <S.StyledWrapper>
      Dashboard<Button onClick={logout}>Logout</Button>
    </S.StyledWrapper>
  );
};
