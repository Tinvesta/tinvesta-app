import styled from '@emotion/styled';
import { IconButton, Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  pointer-events: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.grey[800]};

  ${respondToMax.xmobile`
    width: 100%;
  `}
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100% - 100px);

  ${respondToMax.mobile`
    height: calc(100% - 90px);
  `}

  ${respondToMax.xmobile`
    height: calc(100% - 80px);
  `}
`;

const StyledActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledChipsAndActionsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const StyledInfoIconButton = styled(IconButton)`
  pointer-events: all;
  height: fit-content;
`;

const StyledUserInfoWrapper = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(0, 5, 25, 5)};

  ${({ theme }) => respondToMax.mobile`
    padding: ${theme.spacing(0, 4, 22, 4)};
  `}

  ${({ theme }) => respondToMax.xmobile`
    padding: ${theme.spacing(0, 3, 20, 3)};
  `}
`;

const StyledUserInfoGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const StyledUserInfoTypography = styled(Typography)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StyledProfilePreviewWrapper = styled.div`
  display: contents;

  > div {
    padding-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
  StyledInfoIconButton,
  StyledUserInfoWrapper,
  StyledUserInfoTypography,
  StyledUserInfoGroupWrapper,
  StyledActionButtonsWrapper,
  StyledProfilePreviewWrapper,
  StyledChipsAndActionsWrapper,
};

export default S;
