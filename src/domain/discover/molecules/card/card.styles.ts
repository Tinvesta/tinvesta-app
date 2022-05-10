import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { linearGradient } from 'polished';

const StyledWrapper = styled.div`
  width: 450px;
  height: 700px;
  display: flex;
  overflow: hidden;
  position: relative;
  pointer-events: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledImageWrapper = styled.div`
  width: 500px;
  height: 600px;
  position: absolute;
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

const StyledUserInfoWrapper = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(0, 3, 30, 3)};
`;

const StyledUserInfoGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
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
  StyledUserInfoWrapper,
  StyledUserInfoTypography,
  StyledUserInfoGroupWrapper,
};

export default S;
