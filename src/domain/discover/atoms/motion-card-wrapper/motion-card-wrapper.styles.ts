import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { linearGradient } from 'polished';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled(motion.div)`
  width: 550px;
  height: 750px;
  overflow: hidden;
  position: absolute;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => respondToMax.sm`
    width: calc(100% - ${theme.spacing(10)});
    height: calc(100% - ${theme.spacing(10)});
  `}

  ${({ theme }) => respondToMax.xs`
    width: calc(100% - ${theme.spacing(4)});
    height: calc(100% - ${theme.spacing(4)});
  `}
`;

const StyledCheckCircleOutlinedIconWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  transition: all 250ms ease-in;
  top: ${({ theme }) => theme.spacing(4)};
  left: ${({ theme }) => theme.spacing(4)};

  > svg {
    width: 4em;
    height: 4em;

    ${respondToMax.xs`
      width: 3.5em;
      height: 3.5em;
    `}
  }
`;

const StyledHighlightOffOutlinedIconWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  transition: all 250ms ease-in;
  top: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};

  > svg {
    width: 4em;
    height: 4em;

    ${respondToMax.xs`
      width: 3.5em;
      height: 3.5em;
    `}
  }
`;

const StyledActionButtonsWrapper = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${respondToMax.sm`
    height: 90px;
  `}

  ${respondToMax.xs`
    height: 80px;
    justify-content: space-between;
  `}
`;

const StyledGradient = styled.div`
  z-index: 1;
  width: 100%;
  bottom: 100px;
  height: 300px;
  position: absolute;
  pointer-events: none;
  ${({ theme }) =>
    linearGradient({
      colorStops: ['rgba(255,0,0,0) 0%', theme.palette.primary.main],
      toDirection: 'to bottom',
    })}

  ${respondToMax.sm`
    bottom: 90px;
    height: 275px;
  `}

  ${respondToMax.xs`
    bottom: 80px;
    height: 250px;
  `}
`;

const S = {
  StyledWrapper,
  StyledGradient,
  StyledActionButtonsWrapper,
  StyledCheckCircleOutlinedIconWrapper,
  StyledHighlightOffOutlinedIconWrapper,
};

export default S;
