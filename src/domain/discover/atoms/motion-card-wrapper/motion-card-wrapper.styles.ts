import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { linearGradient } from 'polished';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled(motion.div)`
  width: 550px;
  height: 750px;
  overflow: hidden;
  position: absolute;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.grey[800]};

  ${respondToMax.medium`
    width: 600px;
  `}

  ${({ theme }) => respondToMax.mobile`
    width: calc(100% - ${theme.spacing(10)});
    height: calc(100% - ${theme.spacing(10)});
  `}

  ${({ theme }) => respondToMax.xmobile`
    width: calc(100% - ${theme.spacing(5)});
    height: calc(100% - ${theme.spacing(5)});
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

    ${respondToMax.xmobile`
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

    ${respondToMax.xmobile`
      width: 3.5em;
      height: 3.5em;
    `}
  }
`;

const StyledFavouriteIconButtonWrapper = styled(IconButton)`
  z-index: 1;
  border: 1px solid;
  position: absolute;
  right: ${({ theme }) => theme.spacing(25)};
  bottom: ${({ theme }) => theme.spacing(4)};

  &.MuiIconButton-root {
    padding: ${({ theme }) => theme.spacing(4)};

    > .MuiSvgIcon-root {
      width: 1.5em;
      height: 1.5em;

      ${respondToMax.mobile`
        width: 1.2em;
        height: 1.2em;
      `}

      ${respondToMax.xmobile`
        width: 1em;
        height: 1em;
      `}
    }
  }

  ${({ theme }) => respondToMax.xmobile`
    right: ${theme.spacing(10)};
  `}
`;

const StyledCloseOutlinedIconButtonWrapper = styled(IconButton)`
  z-index: 1;
  border: 1px solid;
  position: absolute;
  left: ${({ theme }) => theme.spacing(25)};
  bottom: ${({ theme }) => theme.spacing(4)};

  &.MuiIconButton-root {
    padding: ${({ theme }) => theme.spacing(4)};

    > .MuiSvgIcon-root {
      width: 1.5em;
      height: 1.5em;

      ${respondToMax.mobile`
        width: 1.2em;
        height: 1.2em;
      `}

      ${respondToMax.xmobile`
        width: 1em;
        height: 1em;
      `}
    }
  }

  ${({ theme }) => respondToMax.xmobile`
    left: ${theme.spacing(10)};
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
      colorStops: ['rgba(255,0,0,0) 0%', theme.palette.grey[800]],
      toDirection: 'to bottom',
    })}
`;

const StyledActionButtonsBackground = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const S = {
  StyledWrapper,
  StyledGradient,
  StyledActionButtonsBackground,
  StyledFavouriteIconButtonWrapper,
  StyledCheckCircleOutlinedIconWrapper,
  StyledCloseOutlinedIconButtonWrapper,
  StyledHighlightOffOutlinedIconWrapper,
};

export default S;
