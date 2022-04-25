import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  height: 100%;
  min-width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => respondToMax.small`
    padding: ${theme.spacing(6, 5)};
  `}

  ${({ theme }) => respondToMax.mobile`
    padding: ${theme.spacing(5, 4)};
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
  width: calc(100% - ${({ theme }) => theme.spacing(6)} * 2);

  ${({ theme }) => respondToMax.small`
    width: calc(100% - ${theme.spacing(5)} * 2);
  `}

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

const S = {
  StyledWrapper,
  StyledHeading,
  StyledFormWrapper,
  StyledContentWrapper,
};

export default S;
