import styled from '@emotion/styled';
import { Icon, Typography } from '@mui/material';
import { rgba } from 'polished';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const StyledAsideWrapper = styled.aside`
  display: flex;
  min-width: 150px;
  max-width: 150px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledAsideBottomContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const StyledWelcomeTypography = styled(Typography)`
  width: 125px;
  display: flex;
  text-align: center;
  word-break: break-all;
  justify-content: center;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(4, 0, 4, 0)};
`;

const StyledUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledUserInfoDetails = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const StyledMenu = styled.div`
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;

const StyledMenuItem = styled.a<{ active: boolean }>`
  display: flex;
  height: 100px;
  position: relative;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  transition: all 250ms ease-in-out;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => rgba(theme.palette.text.primary, 0.5)};
  }

  & > div {
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  }

  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.palette.background.default};

    &::before {
      z-index: 1;
      content: '';
      width: 40px;
      height: 30px;
      position: absolute;
      border-top: 0;
      border-left: 0;
      border-radius: 0 0 ${theme.shape.borderRadius}px 0;
      left: inherit;
      right: 0;
      top: -30px;
      background-color: ${theme.palette.grey[800]};
    }

    &::after {
      z-index: 1;
      content: '';
      width: 40px;
      height: 30px;
      position: absolute;
      border-top: 0;
      border-left: 0;
      border-radius: 0 ${theme.shape.borderRadius}px 0 0;
      left: inherit;
      right: 0;
      top: inherit;
      bottom: -30px;
      background-color: ${theme.palette.grey[800]};
    }
  `}
`;

const StyledMenuItemTopBox = styled.div`
  width: 40px;
  height: 30px;
  position: absolute;
  left: inherit;
  right: 0;
  top: -30px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const StyledMenuItemBottomBox = styled.div`
  width: 40px;
  height: 30px;
  position: absolute;
  left: inherit;
  right: 0;
  bottom: -30px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const StyledMenuItemIcon = styled(Icon)`
  display: flex;
`;

const S = {
  StyledMenu,
  StyledWrapper,
  StyledMenuItem,
  StyledLogoWrapper,
  StyledMenuItemIcon,
  StyledAsideWrapper,
  StyledContentWrapper,
  StyledMenuItemTopBox,
  StyledUserInfoDetails,
  StyledUserInfoWrapper,
  StyledMenuItemBottomBox,
  StyledWelcomeTypography,
  StyledAsideBottomContentWrapper,
};

export default S;
