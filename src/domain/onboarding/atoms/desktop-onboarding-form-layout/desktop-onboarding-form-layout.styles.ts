import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledWrapper = styled.div`
  display: grid;
  overflow: hidden;
  max-width: 1300px;
  min-width: 1300px;
  backdrop-filter: blur(5px);
  grid-template-columns: 1fr 1fr;
  margin: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledImageWrapper = styled.div`
  position: relative;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(5)};
`;

const StyledFormWrapper = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledHeading = styled(Typography)`
  width: 100%;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const S = {
  StyledWrapper,
  StyledHeading,
  StyledFormWrapper,
  StyledImageWrapper,
  StyledContentWrapper,
};

export default S;
