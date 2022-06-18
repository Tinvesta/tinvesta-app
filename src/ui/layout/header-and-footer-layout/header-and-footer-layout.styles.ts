import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const StyledBackToTopButtonWrapper = styled(motion.div)`
  position: fixed;
  right: ${({ theme }) => theme.spacing(10)};
  bottom: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => respondToMax.lg`
    right: ${theme.spacing(8)};
    bottom: ${theme.spacing(8)};
  `}

  ${({ theme }) => respondToMax.md`
    right: ${theme.spacing(7)};
    bottom: ${theme.spacing(7)};
  `}

  ${({ theme }) => respondToMax.sm`
    right: ${theme.spacing(6)};
    bottom: ${theme.spacing(6)};
  `}

  ${({ theme }) => respondToMax.xs`
    right: ${theme.spacing(5)};
    bottom: ${theme.spacing(5)};
  `}
`;

const S = {
  StyledWrapper,
  StyledBackToTopButtonWrapper,
};

export default S;
