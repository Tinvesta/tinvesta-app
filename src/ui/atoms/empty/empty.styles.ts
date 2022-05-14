import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  max-width: 500px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledActionButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const S = {
  StyledWrapper,
  StyledTypography,
  StyledActionButton,
};

export default S;
