import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledWrapper = styled.div`
  max-width: 800px;
  min-width: 800px;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledFormWrapper = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const StyledHeading = styled(Typography)`
  width: 100%;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const S = {
  StyledWrapper,
  StyledHeading,
  StyledFormWrapper,
  StyledContentWrapper,
};

export default S;
