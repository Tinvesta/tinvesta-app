import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledModalContentWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(4)};

  > canvas {
    overflow: hidden;
    border: 1px dashed;
    touch-action: none;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;

    ${({ theme }) => respondToMax.xs`
      width: 250px !important;
      height: 375px !important;
      margin: ${theme.spacing(3, 0)};
    `}
  }

  ${({ theme }) => respondToMax.xs`
    gap: ${theme.spacing(4)};
    padding-top: ${theme.spacing(3)};
  `}
`;

const S = {
  StyledModalContentWrapper,
};

export default S;
