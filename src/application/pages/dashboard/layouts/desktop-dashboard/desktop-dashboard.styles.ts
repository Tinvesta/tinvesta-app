import styled from '@emotion/styled';
import { Avatar, Icon, IconButton, Typography } from '@mui/material';

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
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledAsideBottomContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
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
  padding: ${({ theme }) => theme.spacing(6, 0)};
`;

const StyledUserInfoWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

const StyledUserInfoDetails = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledMenu = styled.div`
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(6, 0)};
`;

const StyledContentWrapper = styled.div`
  width: 100%;
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
  color: ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.dark};
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
      background-color: ${theme.palette.primary.main};
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
      background-color: ${theme.palette.primary.main};
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

const StyledAvatarWrapper = styled.div`
  width: 65px;
  height: 65px;
  position: relative;

  &:hover > button {
    opacity: 1;
    transform: rotate(90deg);
    background-color: ${({ theme }) => theme.palette.info.dark};
  }
`;

const StyledAvatar = styled(Avatar)`
  top: 0;
  left: 0;
  width: 65px;
  height: 65px;
  cursor: pointer;
  position: absolute;
`;

const StyledAvatarIconButtonHover = styled(IconButton)`
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  width: 65px;
  height: 65px;
  cursor: pointer;
  position: absolute;
  transition: all 250ms ease-in-out;
  background-color: ${({ theme }) => theme.palette.info.dark};
`;

const S = {
  StyledMenu,
  StyledAvatar,
  StyledWrapper,
  StyledMenuItem,
  StyledLogoWrapper,
  StyledMenuItemIcon,
  StyledAsideWrapper,
  StyledAvatarWrapper,
  StyledContentWrapper,
  StyledMenuItemTopBox,
  StyledUserInfoDetails,
  StyledUserInfoWrapper,
  StyledMenuItemBottomBox,
  StyledWelcomeTypography,
  StyledAvatarIconButtonHover,
  StyledAsideBottomContentWrapper,
};

export default S;
