import styled from '@emotion/styled';
import { CancelOutlined } from '@mui/icons-material';

const StyledContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;

const StyledCloseIcon = styled(CancelOutlined)`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  transform: rotate(0deg);
  transition: all 150ms ease-in-out;
  fill: ${({ theme }) => theme.palette.divider};

  &:hover {
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.palette.common.white};
  }
`;

const S = {
  StyledCloseIcon,
  StyledContentWrapper,
};

export default S;
