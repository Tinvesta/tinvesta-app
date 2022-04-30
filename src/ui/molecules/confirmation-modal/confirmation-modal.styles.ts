import styled from '@emotion/styled';
import { DialogActions } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 400px;

  ${respondToMax.xmobile`
    width: 100%;
    min-width: 225px;
  `}
`;

const StyledDialogActions = styled(DialogActions)`
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing(2)};

  & > button {
    margin: 0 !important;
  }
`;

const S = {
  StyledWrapper,
  StyledDialogActions,
};

export default S;
