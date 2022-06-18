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
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  max-height: 70px;
  min-height: 70px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${respondToMax.sm`
    max-height: 60px;
    min-height: 60px;
  `}
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  min-width: 50px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledTopNavigation = styled.nav`
  display: flex;
  max-height: 70px;
  min-height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(0, 4)};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => respondToMax.sm`
    max-height: 60px;
    min-height: 60px;
    padding: ${theme.spacing(0, 3)};
  `}
`;

const StyledRightTopNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.sm`
    gap: ${theme.spacing(2)};
  `}
`;

const StyledLogoWrapper = styled.span<{ height: number }>`
  right: 50%;
  cursor: pointer;
  position: absolute;
  transform: translateX(50%);
  height: ${({ height }) => height}px;
`;

const S = {
  StyledWrapper,
  StyledLogoWrapper,
  StyledTopNavigation,
  StyledContentWrapper,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
  StyledRightTopNavigationWrapper,
};

export default S;
