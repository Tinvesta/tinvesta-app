import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => respondToMax.mobile`
    padding: ${theme.spacing(3)};
  `}

  ${({ theme }) => respondToMax.xmobile`
    padding: ${theme.spacing(2)};
  `}
`;

const StyledContentWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => respondToMax.mobile`
    padding-top: ${theme.spacing(3)};
  `}
`;

const S = {
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
