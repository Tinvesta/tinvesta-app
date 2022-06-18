import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledSubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};

  > .MuiButton-root {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }

  ${({ theme }) => respondToMax.xs`
    margin-top: ${theme.spacing(4)};

    > .MuiButton-root {
      margin-top: ${theme.spacing(10)};
    }
  `}
`;

const S = {
  StyledWrapper,
  StyledSubHeaderWrapper,
};

export default S;
