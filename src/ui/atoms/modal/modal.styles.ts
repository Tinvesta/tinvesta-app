import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { respondToMax } from '@infrastructure';

const StyledContentWrapper = styled(motion.div)<{
  align?: 'right' | 'center' | 'left';
  alwaysFullWidth?: boolean;
  backgroundColor?: string;
  withBorderRadius?: boolean;
  withPadding?: boolean;
}>`
  top: 50%;
  position: absolute;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.background.paper};
  width: ${({ alwaysFullWidth }) => (alwaysFullWidth ? '100%' : '500px')};
  border-radius: ${({ withBorderRadius }) => (withBorderRadius ? 20 : 0)}px;
  padding: ${({ theme, withPadding }) => (withPadding ? theme.spacing(5) : 0)};

  ${({ align }) =>
    align === 'center' &&
    `
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  ${({ align }) =>
    align === 'left' &&
    `
    left: 0;
  `}

  ${({ align }) =>
    align === 'right' &&
    `
    left: 100%;
    transform: translate(-100%, -50%);
  `}

  ${({ theme, withPadding }) => respondToMax.sm`
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: ${withPadding ? theme.spacing(4) : 0};
  `};

  ${({ theme, withPadding }) => respondToMax.xs`
    padding: ${withPadding ? theme.spacing(3) : 0};
  `};
`;

const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(Typography)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${respondToMax.xs`
    height: 25px;
  `}
`;

const StyledCloseIcon = styled(CancelOutlinedIcon)`
  cursor: pointer;
  position: absolute;
  transform: rotate(0deg);
  transition: all 250ms ease-in-out;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  fill: ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.palette.secondary.dark};
  }

  ${({ theme }) => respondToMax.sm`
    top: ${theme.spacing(4)};
    right: ${theme.spacing(4)};
  `};

  ${({ theme }) => respondToMax.xs`
    top: ${theme.spacing(3)};
    right: ${theme.spacing(3)};
  `};
`;

const S = {
  StyledTitle,
  StyledHeader,
  StyledCloseIcon,
  StyledContentWrapper,
};

export default S;
