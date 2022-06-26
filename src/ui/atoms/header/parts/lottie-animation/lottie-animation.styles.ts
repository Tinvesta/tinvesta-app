import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  z-index: 20;
  width: 75px;
  height: 75px;
  cursor: pointer;
  position: relative;

  ${respondToMax.md`
    width: 65px;
    height: 65px;
  `}

  ${respondToMax.xs`
    width: 55px;
    height: 55px;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
