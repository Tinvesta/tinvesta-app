import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10, 0)};
`;

const StyledContentWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;

  ${respondToMax.medium`
    max-width: unset;
  `}

  ${({ theme }) => respondToMax.xmobile`
    padding-right: ${theme.spacing(3)};
  `}
`;

const S = {
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
