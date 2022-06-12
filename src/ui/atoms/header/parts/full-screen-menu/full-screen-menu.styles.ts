import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const StyledWrapper = styled.div``;

const StyledAside = styled(motion.aside)`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledLinksContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const StyledLinkTypography = styled(Typography)<{ active: string }>`
  ${({ active }) => active === 'false' && 'cursor: pointer;'}
`;

const S = {
  StyledAside,
  StyledWrapper,
  StyledLinkTypography,
  StyledLinksContainer,
};

export default S;
