import styled from '@emotion/styled';
import { AddCircleOutlined as AddIcon, Cancel as CancelIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { FormHelperText } from '@mui/material';

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledImage = styled.img`
  width: 115px;
  height: 175px;
  background-color: ${({ theme }) => theme.palette.grey[400]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledModalContentWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  > canvas {
    overflow: hidden;
    border: 1px dashed;
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }
`;

const StyledCancelIcon = styled(CancelIcon)`
  cursor: pointer;
  position: absolute;
  transform: rotate(0deg);
  transition: all 150ms ease-in-out;
  bottom: -${({ theme }) => theme.spacing(3)};
  right: -${({ theme }) => theme.spacing(3)};
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
  transition: all 150ms ease-in-out;
  bottom: -${({ theme }) => theme.spacing(3)};
  right: -${({ theme }) => theme.spacing(3)};
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
`;

const StyledImagePlaceholder = styled(LoadingButton)<{ error?: boolean }>`
  width: 115px;
  height: 175px;
  cursor: pointer;
  border: 1px dashed;
  transition: all 150ms ease-in-out;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  ${({ error, theme }) => error && `border-color: ${theme.palette.error.main};`}
`;

const StyledFormHelperText = styled(FormHelperText)`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
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
  StyledImagePlaceholderWrapper,
  StyledScaledImagePreviewWrapper,
};

export default S;
