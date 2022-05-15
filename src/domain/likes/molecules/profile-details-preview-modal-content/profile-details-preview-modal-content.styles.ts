import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';

const StyledWrapper = styled.div`
  width: 500px;
  height: 100vh;
  position: relative;

  & > div {
    border-radius: 0;
  }
`;

const StyledHeader = styled.header`
  z-index: 1;
  width: 100%;
  position: absolute;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledCloseIcon = styled(CancelOutlinedIcon)`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  transform: rotate(0deg);
  transition: all 150ms ease-in-out;
  fill: ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    transform: rotate(90deg);
    fill: ${({ theme }) => theme.palette.divider};
  }
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledCloseIcon,
};

export default S;
