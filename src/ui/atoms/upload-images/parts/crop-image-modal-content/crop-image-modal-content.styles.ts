import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledModalContentWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  > canvas {
    overflow: hidden;
    border: 1px dashed;
    touch-action: none;
    margin: ${({ theme }) => theme.spacing(3, 0, 4, 0)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;

    ${respondToMax.mobile`
      width: 300px !important;
      height: 420px !important;
    `}

    ${({ theme }) => respondToMax.xmobile`
      width: 250px !important;
      height: 350px !important;
      margin: ${theme.spacing(3, 0)};
    `}
  }
`;

const S = {
  StyledModalContentWrapper,
};

export default S;
