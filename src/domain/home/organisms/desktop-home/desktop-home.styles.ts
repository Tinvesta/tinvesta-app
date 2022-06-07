import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const StyledOverflowX = styled.div`
  overflow-x: hidden;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  align-items: center;
`;

const StyledTextBlockWrapper = styled.div`
  width: 50%;
  text-align: left;
`;

const StyledSubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};

  > .MuiButton-root {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }

  ${({ theme }) => respondToMax.xmobile`
    margin-top: ${theme.spacing(4)};

    > .MuiButton-root {
      margin-top: ${theme.spacing(10)};
    }
  `}
`;

const S = {
  StyledWrapper,
  StyledOverflowX,
  StyledContentWrapper,
  StyledTextBlockWrapper,
  StyledSubHeaderWrapper,
};

export default S;
