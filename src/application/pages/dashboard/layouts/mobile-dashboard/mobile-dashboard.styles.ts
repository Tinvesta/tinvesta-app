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

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  min-width: 50px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledTopNavigation = styled.nav`
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(0, 4)};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => respondToMax.xmobile`
    height: 65px;
    padding: ${theme.spacing(0, 3)};
  `}
`;

const StyledRightTopNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.xmobile`
    gap: ${theme.spacing(2)};
  `}
`;

const S = {
  StyledWrapper,
  StyledTopNavigation,
  StyledContentWrapper,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
  StyledRightTopNavigationWrapper,
};

export default S;
