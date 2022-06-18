import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => respondToMax.sm`
    padding: ${theme.spacing(4)};
  `}

  ${({ theme }) => respondToMax.xs`
    padding: ${theme.spacing(3)};
  `}
`;

const StyledContentWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => respondToMax.sm`
    padding-top: ${theme.spacing(4)};
  `}
`;

const S = {
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
