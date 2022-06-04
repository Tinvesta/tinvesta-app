import styled from '@emotion/styled';
import { CancelOutlined as CancelOutlinedIcon } from '@mui/icons-material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  height: 100%;
  position: relative;
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
  transition: all 250ms ease-in-out;
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
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.primary.main};

  > button {
    height: fit-content;
  }

  ${respondToMax.mobile`
    height: 90px;
  `}

  ${respondToMax.xmobile`
    height: 80px;
  `}

  & > *:first-of-type {
    border-right: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

const StyledActionButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledCloseIcon,
  StyledActionButton,
  StyledActionsWrapper,
};

export default S;
