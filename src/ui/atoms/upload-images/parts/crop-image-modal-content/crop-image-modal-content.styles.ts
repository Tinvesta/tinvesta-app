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
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;

    ${respondToMax.xmobile`
      width: 250px !important;
      height: 350px !important;
    `}
  }
`;

const S = {
  StyledModalContentWrapper,
};

export default S;
