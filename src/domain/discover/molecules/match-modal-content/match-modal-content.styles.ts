import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
  width: calc(100vw - ${({ theme }) => `${theme.spacing(3)} - ${theme.spacing(3)}`} - 2px);
  height: calc(100vh - ${({ theme }) => `${theme.spacing(3)} - ${theme.spacing(3)}`} - 2px);
`;

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StyledImageWrapper = styled.div`
  width: fit-content;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;

const StyledButton = styled(Button)`
  min-width: 200px;
`;

const S = {
  StyledButton,
  StyledWrapper,
  StyledImageWrapper,
  StyledImageContainer,
};

export default S;
