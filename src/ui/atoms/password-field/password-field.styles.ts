import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)`
  display: block;
  position: relative;
`;

const StyledValidatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)};

  > .MuiTypography-root {
    display: flex;
    align-items: center;

    > .material-icons {
      display: flex;
      align-items: center;
      margin-right: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

const S = {
  StyledTextField,
  StyledValidatorsContainer,
};

export default S;
