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
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${respondToMax.xs`
    width: 100%;
  `}
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100% - 100px);

  ${respondToMax.sm`
    height: calc(100% - 90px);
  `}

  ${respondToMax.xs`
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
  padding: ${({ theme }) => theme.spacing(0, 5, 15, 5)};

  ${({ theme }) => respondToMax.sm`
    padding: ${theme.spacing(0, 4, 13, 4)};
  `}

  ${({ theme }) => respondToMax.xs`
    padding: ${theme.spacing(0, 3, 12, 3)};
  `}
`;

const StyledUserInfoGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.xs`
    padding-bottom: ${theme.spacing(2)};
  `}
`;

const StyledUserInfoTypography = styled(Typography)<{ withFlexWrap?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ withFlexWrap }) => withFlexWrap && 'flex-wrap: wrap;'};
`;

const StyledProfilePreviewWrapper = styled.div`
  display: contents;
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
