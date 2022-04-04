import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledChildrenWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledHeading = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const S = {
  StyledWrapper,
  StyledHeading,
  StyledChildrenWrapper,
};

export default S;
