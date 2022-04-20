import styled from '@emotion/styled';
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
    width: 3em;
    height: 3em;
  }
`;

const StyledHighlightOffOutlinedIconWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  transition: all 250ms ease-in;
  top: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};

  > svg {
    width: 3em;
    height: 3em;
  }
`;

const S = {
  StyledWrapper,
  StyledCheckCircleOutlinedIconWrapper,
  StyledHighlightOffOutlinedIconWrapper,
};

export default S;
