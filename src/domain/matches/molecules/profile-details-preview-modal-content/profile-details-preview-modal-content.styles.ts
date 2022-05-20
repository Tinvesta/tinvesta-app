import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 500px;
  height: 100vh;
  position: relative;

  ${respondToMax.mobile`
    width: 100vw;
  `}
`;

const StyledHeader = styled.header`
  right: 0;
  z-index: 1;
  position: absolute;
  border-radius: 0 0 0 30px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${respondToMax.xmobile`
    border-radius: 0 0 0 20px;
  `}
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
    fill: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledCloseIcon,
};

export default S;
