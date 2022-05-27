import styled from '@emotion/styled';
import { DialogActions, DialogContent } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 400px;

  ${({ theme }) => respondToMax.xmobile`
    width: calc(100vw - ${`${theme.spacing(4)} - ${theme.spacing(4)}`});
    height: calc(100vh - 40px - ${`${theme.spacing(4)} - ${theme.spacing(4)}`});
  `}

  ${({ theme }) => respondToMax.xmobile`
    height: calc(100vh - 25px - ${`${theme.spacing(4)} - ${theme.spacing(4)}`});
  `}
`;

const StyledDialogContent = styled(DialogContent)`
  padding: ${({ theme }) => theme.spacing(5, 3)};

  ${({ theme }) => respondToMax.xmobile`
    padding: ${theme.spacing(5, 3, 6, 3)};
  `}
`;

const StyledDialogActions = styled(DialogActions)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(5)};

  & > button {
    margin: 0 !important;
  }

  ${({ theme }) => respondToMax.mobile`
    gap: ${theme.spacing(4)};
  `}

  ${({ theme }) => respondToMax.xmobile`
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
