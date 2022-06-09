import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  margin-bottom: -10px;
  margin-right: -35px;

  ${respondToMax.medium`
    margin-right: -250px;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
