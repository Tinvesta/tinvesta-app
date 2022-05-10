import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)`
  position: absolute;
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
  }
`;

const StyledFavouriteIconButtonWrapper = styled(IconButton)`
  z-index: 1;
  border: 1px solid;
  position: absolute;
  right: ${({ theme }) => theme.spacing(27)};
  bottom: ${({ theme }) => theme.spacing(4)};

  &.MuiIconButton-root {
    padding: ${({ theme }) => theme.spacing(4)};

    > .MuiSvgIcon-root {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

const StyledCloseOutlinedIconButtonWrapper = styled(IconButton)`
  z-index: 1;
  border: 1px solid;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(4)};
  left: calc(${({ theme }) => theme.spacing(25)} + 10px);

  &.MuiIconButton-root {
    padding: ${({ theme }) => theme.spacing(4)};

    > .MuiSvgIcon-root {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

const S = {
  StyledWrapper,
  StyledFavouriteIconButtonWrapper,
  StyledCheckCircleOutlinedIconWrapper,
  StyledCloseOutlinedIconButtonWrapper,
  StyledHighlightOffOutlinedIconWrapper,
};

export default S;
