import styled from '@emotion/styled';
import { DialogActions, DialogContent } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledDialogContent = styled(DialogContent)`
  padding: ${({ theme }) => theme.spacing(5, 3)};

  ${({ theme }) => respondToMax.xs`
    padding: ${theme.spacing(5, 3, 6, 3)};
  `}
`;

const StyledDialogActions = styled(DialogActions)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(5)};

  & > button {
    margin: 0 !important;
  }

  ${({ theme }) => respondToMax.sm`
    gap: ${theme.spacing(4)};
  `}

  ${({ theme }) => respondToMax.xs`
    gap: ${theme.spacing(3)};
    flex-direction: column-reverse;
  `}
`;

const S = {
  StyledWrapper,
  StyledDialogContent,
  StyledDialogActions,
};

export default S;
