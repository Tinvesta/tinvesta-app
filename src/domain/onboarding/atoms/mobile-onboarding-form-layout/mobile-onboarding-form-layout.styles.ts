import styled from '@emotion/styled';
import { LinearProgress, Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  height: 100%;
  min-width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => respondToMax.mobile`
    padding: ${theme.spacing(4, 4)};
  `}

  ${({ theme }) => respondToMax.xmobile`
    padding: ${theme.spacing(4, 2)};
  `}
`;

const StyledContentWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - ${({ theme }) => theme.spacing(5)} * 2);

  ${({ theme }) => respondToMax.mobile`
    width: calc(100% - ${theme.spacing(4)} * 2);
  `}

  ${({ theme }) => respondToMax.xmobile`
    width: calc(100% - ${theme.spacing(2)} * 2);
  `}
`;

const StyledFormWrapper = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledHeading = styled(Typography)`
  width: 100%;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const StyledLinearProgress = styled(LinearProgress)`
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  height: ${({ theme }) => theme.spacing(2)};
`;

const StyledBackButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => respondToMax.mobile`
    margin-bottom: ${theme.spacing(3)};
  `}
`;

const S = {
  StyledWrapper,
  StyledHeading,
  StyledFormWrapper,
  StyledContentWrapper,
  StyledLinearProgress,
  StyledBackButtonWrapper,
};

export default S;
