import styled from '@emotion/styled';
import { Icon } from '@mui/material';
import { rgba } from 'polished';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const StyledAsideWrapper = styled.aside`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3)} 0 ${({ theme }) => theme.spacing(4)} 0;
`;

const StyledUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.grey[700]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledUserInfoDetails = styled.div``;

const StyledMenu = styled.div`
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  & > a:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

const StyledMenuItem = styled.a<{ active: boolean }>`
  display: flex;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.grey[700]};

  ${({ active, theme }) => active && `color: ${rgba(theme.palette.text.primary, 0.5)};`}
`;

const StyledMenuItemIcon = styled(Icon)`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const StyledContentWrapper = styled.div``;

const S = {
  StyledMenu,
  StyledWrapper,
  StyledMenuItem,
  StyledLogoWrapper,
  StyledAsideWrapper,
  StyledMenuItemIcon,
  StyledContentWrapper,
  StyledUserInfoDetails,
  StyledUserInfoWrapper,
};

export default S;
