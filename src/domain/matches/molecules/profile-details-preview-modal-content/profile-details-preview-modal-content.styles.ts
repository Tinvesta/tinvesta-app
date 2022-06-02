import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 600px;
  height: 100%;
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
  background-color: ${({ theme }) => theme.palette.primary.dark};

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

const StyledActionsWrapper = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.palette.primary.dark};

  > button {
    height: fit-content;
  }

  ${respondToMax.mobile`
    height: 90px;
  `}

  ${respondToMax.xmobile`
    height: 80px;
    flex-direction: column-reverse;
  `}
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledCloseIcon,
  StyledActionsWrapper,
};

export default S;
