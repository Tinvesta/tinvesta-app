import styled from '@emotion/styled';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

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
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)<{ active: boolean }>`
  ${({ active, theme }) => active && `color: ${theme.palette.text.primary};`};
`;

const S = {
  StyledWrapper,
  StyledContentWrapper,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
};

export default S;
