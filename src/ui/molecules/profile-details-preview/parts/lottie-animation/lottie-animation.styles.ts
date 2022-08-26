import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  right: ${({ theme }) => theme.spacing(5)};
  bottom: ${({ theme }) => theme.spacing(5)};
  position: absolute;
  z-index: 20;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  ${respondToMax.md`
    width: 35px;
    height: 35px;
  `}

  ${({ theme }) => respondToMax.sm`
    width: 30px;
    height: 30px;
    right: ${theme.spacing(4)};
    bottom: ${theme.spacing(4)};
  `}

  ${({ theme }) => respondToMax.xs`
    right: ${theme.spacing(3)};
    bottom: ${theme.spacing(3)};
  `}
`;

const S = {
  StyledWrapper,
};

export default S;
