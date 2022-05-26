import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)};
  width: calc(100vw - ${({ theme }) => `${theme.spacing(3)} - ${theme.spacing(3)}`});
  height: calc(100vh - ${({ theme }) => `${theme.spacing(3)} - ${theme.spacing(3)}`});

  ${respondToMax.mobile`
    justify-content: flex-start;
  `}
`;

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.mobile`
    gap: ${theme.spacing(2)};
  `}

  ${({ theme }) => respondToMax.xmobile`
    gap: ${theme.spacing(1)};
  `}
`;

const StyledImageWrapper = styled.div<{ rotationDirection: 'left' | 'right' }>`
  overflow: hidden;
  width: fit-content;

  > span {
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }

  ${({ rotationDirection }) =>
    rotationDirection === 'left' && 'transform: scale(.9) rotate(-2deg);'}

  ${({ rotationDirection }) =>
    rotationDirection === 'right' && 'transform: scale(1.05) rotate(2deg);'}
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => respondToMax.xmobile`
    width: 100%;
    gap: ${theme.spacing(3)};
  `}
`;

const StyledButton = styled(Button)`
  min-width: 250px;

  ${respondToMax.xmobile`
    width: 100%;
    max-width: 250px;
    min-width: initial;
  `}
`;

const S = {
  StyledButton,
  StyledWrapper,
  StyledImageWrapper,
  StyledButtonsWrapper,
  StyledImageContainer,
};

export default S;
