import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(10, 4, 0, 4)};

  ${({ theme }) => respondToMax.xs`
    padding: ${theme.spacing(6, 3, 0, 3)};
  `}
`;

const StyledHeader = styled(Typography)`
  z-index: 10;
  position: relative;
  text-align: center;
`;

const StyledSubheader = styled(Typography)`
  z-index: 1;
  max-width: 550px;
`;

const StyledTextBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

const StyledSubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};

  > .MuiButton-root {
    margin-top: ${({ theme }) => theme.spacing(7)};
  }

  ${({ theme }) => respondToMax.xs`
    margin-top: ${theme.spacing(4)};
  `}
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.xs`
    gap: ${theme.spacing(2)};
  `}
`;

const StyledMatchCardWrapper = styled.div`
  max-width: 500px;
`;

const StyledMaskCardWrapper = styled.div`
  overflow: hidden;
  max-width: 500px;
  max-height: 250px;

  ${respondToMax.xs`
    max-height: 150px;
  `}
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledSubheader,
  StyledCardsWrapper,
  StyledMaskCardWrapper,
  StyledMatchCardWrapper,
  StyledSubHeaderWrapper,
  StyledTextBlockWrapper,
};

export default S;
