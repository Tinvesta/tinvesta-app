import styled from '@emotion/styled';
import { Button, List, Paper, Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledHeader = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.mobile`
    margin-bottom: ${theme.spacing(2)};
  `}

  ${({ theme }) => respondToMax.xmobile`
    margin-bottom: ${theme.spacing(1)};
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.mobile`
    flex-direction: column;
    gap: ${theme.spacing(3)};
  `}
`;

const StyledPaper = styled(Paper)`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};

  ${respondToMax.small`
    width: 350px;
  `}

  ${({ theme }) => respondToMax.xmobile`
    width: 100%;
    padding: ${theme.spacing(3)};
  `}
`;

const StyledSubscriptionPaperButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const StyledList = styled(List)`
  .MuiListItemAvatar-root {
    display: flex;
    align-items: center;
    justify-content: center;

    ${respondToMax.xmobile`
      min-width: 35px;
    `}
  }
`;

const S = {
  StyledList,
  StyledPaper,
  StyledHeader,
  StyledWrapper,
  StyledSubscriptionPaperButton,
};

export default S;