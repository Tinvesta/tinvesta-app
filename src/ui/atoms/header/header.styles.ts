import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => respondToMax.small`
    height: ${theme.spacing(12)};
  `}
`;

const StyledLogoWrapper = styled.span<{ height: number }>`
  right: 50%;
  position: absolute;
  transform: translateX(50%);
  height: ${({ height }) => height}px;
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
`;

const StyledMenuAnimation = styled.div`
  z-index: 20;
  width: 75px;
  height: 75px;
  cursor: pointer;
  position: relative;

  ${respondToMax.small`
    width: 65px;
    height: 65px;
  `}
`;

const S = {
  StyledWrapper,
  StyledLogoWrapper,
  StyledMenuAnimation,
  StyledContentWrapper,
};

export default S;
