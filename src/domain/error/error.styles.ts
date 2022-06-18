import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  display: flex;
  min-height: 750px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${respondToMax.sm`
    min-height: 600px;
  `}

  ${respondToMax.sm`
    min-height: 500px;
  `}
`;

const StyledTypography = styled(Typography)`
  z-index: 1;
  max-width: 350px;

  ${respondToMax.xs`
    max-width: 250px;
  `}
`;

const StyledActionsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => respondToMax.xs`
    margin-top: ${theme.spacing(8)};
  `}
`;

const S = {
  StyledWrapper,
  StyledTypography,
  StyledActionsWrapper,
};

export default S;
