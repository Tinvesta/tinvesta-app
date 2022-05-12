import styled from '@emotion/styled';
import { IconButton, Typography } from '@mui/material';
import { linearGradient } from 'polished';

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
`;

const StyledImageGradient = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 300px;
  position: absolute;
  ${({ theme }) =>
    linearGradient({
      colorStops: ['rgba(255,0,0,0) 0%', theme.palette.grey[800]],
      toDirection: 'to bottom',
    })}
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

const S = {
  StyledWrapper,
  StyledImageWrapper,
  StyledImageGradient,
  StyledInfoIconButton,
  StyledUserInfoWrapper,
  StyledUserInfoTypography,
  StyledUserInfoGroupWrapper,
  StyledActionButtonsWrapper,
  StyledChipsAndActionsWrapper,
};

export default S;
