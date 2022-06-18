import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';
import { List, Paper, Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledHeader = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.sm`
    margin-bottom: ${theme.spacing(2)};
  `}

  ${({ theme }) => respondToMax.xs`
    text-align: center;
    margin-bottom: ${theme.spacing(1)};
  `}
`;

const StyledPapersWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => respondToMax.sm`
    flex-direction: column;
    gap: ${theme.spacing(4)};
    margin-top: ${theme.spacing(3)};
  `}

  ${({ theme }) => respondToMax.xs`
    width: 100%;
    gap: ${theme.spacing(3)};
    margin-top: ${theme.spacing(2)};
  `}
`;

const StyledPaper = styled(Paper)`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: none;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(5)};

  ${respondToMax.md`
    width: 350px;
  `}

  ${({ theme }) => respondToMax.xs`
    width: 100%;
    padding: ${theme.spacing(4)};

    > button {
      width: fit-content;
    }
  `}
`;

const StyledSubscriptionPaperButton = styled(LoadingButton)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const StyledList = styled(List)`
  .MuiListItemAvatar-root {
    display: flex;
    align-items: center;
    justify-content: center;

    ${respondToMax.xs`
      min-width: 35px;
    `}
  }
`;

const S = {
  StyledList,
  StyledPaper,
  StyledHeader,
  StyledPapersWrapper,
  StyledSubscriptionPaperButton,
};

export default S;
