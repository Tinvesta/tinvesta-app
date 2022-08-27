import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  right: 50%;
  width: 35px;
  z-index: 20;
  height: 35px;
  position: absolute;
  border-radius: 100%;
  transform: translateX(50%);
  bottom: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.secondary.main};

  ${respondToMax.md`
    width: 35px;
    height: 35px;
  `}

  ${({ theme }) => respondToMax.sm`
    width: 30px;
    height: 30px;
    bottom: ${theme.spacing(3)};
  `}

  ${respondToMax.xs`
    width: 25px;
    height: 25px;
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
