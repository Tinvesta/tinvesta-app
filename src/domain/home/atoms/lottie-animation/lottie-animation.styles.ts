import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  margin-right: -35px;

  ${respondToMax.lg`
    margin-right: -250px;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
