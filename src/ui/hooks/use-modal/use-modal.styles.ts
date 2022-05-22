import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';

import { respondToMax } from '@infrastructure';

const StyledContentWrapper = styled.div<{
  align?: 'right' | 'center' | 'left';
  withBorderRadius?: boolean;
  withPadding?: boolean;
}>`
  top: 50%;
  position: absolute;
  border-radius: ${({ theme, withBorderRadius }) =>
    withBorderRadius ? theme.shape.borderRadius : 0}px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme, withPadding }) => (withPadding ? theme.spacing(4) : 0)};

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

  ${({ theme, withPadding }) => withPadding && respondToMax.xmobile`padding: ${theme.spacing(3)};`};
`;

const StyledCloseIcon = styled(CancelOutlinedIcon)`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  transform: rotate(0deg);
  transition: all 150ms ease-in-out;
  fill: ${({ theme }) => theme.palette.secondary.dark};

  &:hover {
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const S = {
  StyledCloseIcon,
  StyledContentWrapper,
};

export default S;
