import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const StyledContentWrapper = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  align-items: center;

  ${respondToMax.lg`
    margin-left: auto;
    margin-right: 0;
  `}
`;

const StyledTextBlockWrapper = styled.div`
  width: 50%;
  text-align: left;
`;

const StyledSubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};

  > .MuiButton-root {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }

  ${({ theme }) => respondToMax.xs`
    margin-top: ${theme.spacing(4)};

    > .MuiButton-root {
      margin-top: ${theme.spacing(10)};
    }
  `}
`;

const StyledLottieAnimationWrapper = styled.div`
  width: 800px;
  overflow: hidden;
  min-height: 700px;
  max-height: 700px;
  position: relative;

  ${respondToMax.md`
    min-height: 640px;
    max-height: 640px;
  `}
`;

const StyledHeader = styled(Typography)`
  z-index: 10;
  position: relative;
  white-space: nowrap;
`;

const StyledSubheader = styled(Typography)`
  z-index: 1;
  max-width: 550px;
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledSubheader,
  StyledContentWrapper,
  StyledTextBlockWrapper,
  StyledSubHeaderWrapper,
  StyledLottieAnimationWrapper,
};

export default S;
