import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => respondToMax.xmobile`
    padding-bottom: ${theme.spacing(5)};
  `}
`;

const StyledTitle = styled(Typography)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: ${({ theme }) => theme.spacing(4)};

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
  StyledTitle,
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
