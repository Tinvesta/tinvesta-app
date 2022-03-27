import styled from '@emotion/styled';
import { Paper } from '@mui/material';

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StyledImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledImagePlaceholder = styled.div`
  width: 150px;
  height: 225px;
  border: 1px dashed;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledModalContentWrapper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing(4)};
`;

const S = {
  StyledImage,
  StyledWrapper,
  StyledImagePlaceholder,
  StyledModalContentWrapper,
};

export default S;
