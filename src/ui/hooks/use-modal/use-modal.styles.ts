import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledContentWrapper = styled.div<{
  align?: 'right' | 'center' | 'left';
  backgroundColor?: string;
  withBorderRadius?: boolean;
  withPadding?: boolean;
}>`
  top: 50%;
  position: absolute;
  border-radius: ${({ withBorderRadius }) => (withBorderRadius ? 20 : 0)}px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.background.paper};
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

  ${({ theme, withPadding }) => respondToMax.mobile`
    padding: ${withPadding ? theme.spacing(4) : 0};
  `};
`;

const StyledTitle = styled(Typography)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${respondToMax.xmobile`
    height: 25px;
  `}
`;

const StyledCloseIcon = styled(CancelOutlinedIcon)`
  cursor: pointer;
  position: absolute;
  transform: rotate(0deg);
  transition: all 150ms ease-in-out;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  fill: ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.palette.secondary.dark};
  }

  ${({ theme }) => respondToMax.mobile`
    top: ${theme.spacing(4)};
    right: ${theme.spacing(4)};
  `};
`;

const S = {
  StyledTitle,
  StyledCloseIcon,
  StyledContentWrapper,
};

export default S;
