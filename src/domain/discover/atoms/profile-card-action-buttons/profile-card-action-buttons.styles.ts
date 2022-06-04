import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;

  ${respondToMax.mobile`
    height: 90px;
  `}

  ${respondToMax.xmobile`
    height: 80px;
    justify-content: space-between;
  `}
`;

const StyledFavouriteIconButtonWrapper = styled(IconButton)`
  border: 1px solid;

  &.MuiIconButton-root {
    padding: ${({ theme }) => theme.spacing(4)};

    > .MuiSvgIcon-root {
      width: 1.5em;
      height: 1.5em;

      ${respondToMax.mobile`
        width: 1.2em;
        height: 1.2em;
      `}

      ${respondToMax.xmobile`
        width: 1em;
        height: 1em;
      `}
    }
  }

  ${({ theme }) => respondToMax.xmobile`
    right: ${theme.spacing(10)};
  `}
`;

const StyledCloseOutlinedIconButtonWrapper = styled(IconButton)`
  border: 1px solid;

  &.MuiIconButton-root {
    padding: ${({ theme }) => theme.spacing(4)};

    > .MuiSvgIcon-root {
      width: 1.5em;
      height: 1.5em;

      ${respondToMax.mobile`
        width: 1.2em;
        height: 1.2em;
      `}

      ${respondToMax.xmobile`
        width: 1em;
        height: 1em;
      `}
    }
  }

  ${({ theme }) => respondToMax.xmobile`
    left: ${theme.spacing(10)};
  `}
`;

const S = {
  StyledWrapper,
  StyledFavouriteIconButtonWrapper,
  StyledCloseOutlinedIconButtonWrapper,
};

export default S;
