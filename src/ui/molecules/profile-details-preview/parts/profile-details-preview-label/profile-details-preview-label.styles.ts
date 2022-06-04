import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  & > .material-icons {
    display: flex;
  }
`;

const StyledContentWrapper = styled(Typography)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
