import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.div)`
  position: absolute;
`;

const StyledThumbUpIconWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  transition: all 250ms ease-in-out;
  top: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};

  > svg {
    width: 2em;
    height: 2em;
  }
`;

const StyledThumbDownIconWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  transition: all 250ms ease-in-out;
  top: ${({ theme }) => theme.spacing(4)};
  left: ${({ theme }) => theme.spacing(4)};

  > svg {
    width: 2em;
    height: 2em;
  }
`;

const S = {
  StyledWrapper,
  StyledThumbUpIconWrapper,
  StyledThumbDownIconWrapper,
};

export default S;
