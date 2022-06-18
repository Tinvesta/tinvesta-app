import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.form`
  width: 100%;
  max-width: 850px;

  ${respondToMax.xs`
    max-width: 100%;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
