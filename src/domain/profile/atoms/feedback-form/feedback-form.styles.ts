import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.form`
  max-width: 500px;

  ${respondToMax.xs`
    max-width: 100%;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
