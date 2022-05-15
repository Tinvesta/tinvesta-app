import styled from '@emotion/styled';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)<{ active: boolean }>`
  min-width: 50px;

  ${({ active, theme }) => active && `color: ${theme.palette.text.primary};`};
`;

const StyledTopNavigation = styled.nav`
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(0, 3)};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => respondToMax.xmobile`
    height: 65px;
    padding: ${theme.spacing(0, 2)};
  `}
`;

const S = {
  StyledWrapper,
  StyledTopNavigation,
  StyledContentWrapper,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
};

export default S;
