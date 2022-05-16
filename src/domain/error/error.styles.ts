import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledActionsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(7)};

  ${({ theme }) => respondToMax.xmobile`
    margin-top: ${theme.spacing(5)};
  `}
`;

const S = {
  StyledActionsWrapper,
};

export default S;
