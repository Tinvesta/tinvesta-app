import styled from '@emotion/styled';
import { AddCircleOutlined as AddIcon, Cancel as CancelIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { FormHelperText } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledUploadImagesWrapper = styled.div`
  margin: 0 auto;
  max-width: 300px;

  ${respondToMax.xs`
    max-width: 275px;
  `}
`;

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StyledImage = styled.img`
  width: 115px;
  height: 175px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  ${respondToMax.xs`
    width: 100px;
    height: 150px;
  `}
`;

const StyledModalContentWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  > canvas {
    overflow: hidden;
    border: 1px dashed;
    margin-top: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }
`;

const StyledCancelIcon = styled(CancelIcon)`
  cursor: pointer;
  position: absolute;
  transform: rotate(0deg);
  transition: all 250ms ease-in-out;
  right: -${({ theme }) => theme.spacing(4)};
  bottom: -${({ theme }) => theme.spacing(4)};
  fill: ${({ theme }) => theme.palette.error.main};

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledAddIcon = styled(AddIcon)`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  transform: rotate(0deg);
  transition: all 250ms ease-in-out;
  right: -${({ theme }) => theme.spacing(4)};
  bottom: -${({ theme }) => theme.spacing(4)};
  fill: ${({ theme }) => theme.palette.error.main};

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledScaledImagePreviewWrapper = styled.span`
  display: flex;
  position: relative;
`;

const StyledImagePlaceholderWrapper = styled.span`
  display: flex;
  position: relative;

  &:hover > svg {
    transform: scale(1.2);
  }
`;

const StyledImagePlaceholder = styled(LoadingButton)<{ error?: boolean }>`
  width: 115px;
  height: 175px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px dashed ${({ theme }) => theme.palette.secondary.main};

  ${({ error, theme }) => error && `border-color: ${theme.palette.error.main};`}

  ${respondToMax.xs`
    width: 100px;
    height: 150px;
  `}
`;

const StyledFormHelperText = styled(FormHelperText)`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.error.main};
`;

const S = {
  StyledImage,
  StyledWrapper,
  StyledAddIcon,
  StyledCancelIcon,
  StyledFormHelperText,
  StyledImagePlaceholder,
  StyledModalContentWrapper,
  StyledUploadImagesWrapper,
  StyledImagePlaceholderWrapper,
  StyledScaledImagePreviewWrapper,
};

export default S;
