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

  ${respondToMax.small`
    min-height: 600px;
  `}

  ${respondToMax.mobile`
    min-height: 500px;
  `}
`;

const StyledTypography = styled(Typography)`
  z-index: 1;
  max-width: 350px;

  ${respondToMax.xmobile`
    max-width: 250px;
  `}
`;

const StyledActionsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => respondToMax.xmobile`
    margin-top: ${theme.spacing(8)};
  `}
`;

const S = {
  StyledWrapper,
  StyledTypography,
  StyledActionsWrapper,
};

export default S;
