import styled from '@emotion/styled';
import { Cancel as CancelIcon } from '@mui/icons-material';
import { FormHelperText } from '@mui/material';

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledImagePlaceholder = styled.div<{ error?: boolean }>`
  width: 150px;
  height: 225px;
  border: 1px dashed;
  transition: all 150ms ease-in-out;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  ${({ error, theme }) => error && `border-color: ${theme.palette.error.main};`}
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

const StyledFormHelperText = styled(FormHelperText)`
  text-align: center;
  color: ${({ theme }) => theme.palette.error.main};
`;

const StyledCloseIcon = styled(CancelIcon)`
  cursor: pointer;
  position: absolute;
  transform: rotate(0deg);
  transition: all 150ms ease-in-out;
  top: -${({ theme }) => theme.spacing(3)};
  right: -${({ theme }) => theme.spacing(3)};
  fill: ${({ theme }) => theme.palette.error.main};

  &:hover {
    transform: rotate(90deg);
  }
`;

const StyledScaledImagePreviewWrapper = styled.span`
  display: flex;
  position: relative;
`;

const S = {
  StyledImage,
  StyledWrapper,
  StyledCloseIcon,
  StyledFormHelperText,
  StyledImagePlaceholder,
  StyledModalContentWrapper,
  StyledScaledImagePreviewWrapper,
};

export default S;
