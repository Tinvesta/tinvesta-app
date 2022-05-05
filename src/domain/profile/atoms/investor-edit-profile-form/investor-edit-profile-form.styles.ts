import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.form`
  max-width: 850px;

  ${respondToMax.xmobile`
    max-width: 100%;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
