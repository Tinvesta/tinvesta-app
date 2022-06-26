import styled from '@emotion/styled';
import { List } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10, 0)};

  ${({ theme }) => respondToMax.sm`
    padding: ${theme.spacing(8, 0)};
  `}

  ${({ theme }) => respondToMax.xs`
    padding: ${theme.spacing(5, 0)};
  `}
`;

const StyledContentWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};

  ${respondToMax.lg`
    max-width: unset;
  `}

  ${({ theme }) => respondToMax.xs`
    padding-right: ${theme.spacing(3)};
  `}

  ${({ theme }) => respondToMax.xs`
    gap: ${theme.spacing(4)};
  `}
`;

const StyledLink = styled.a`
  font-weight: 900;
  text-decoration: none;
  border-bottom: 1px solid;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledFullWidthList = styled(List)`
  width: 100%;
`;

const S = {
  StyledLink,
  StyledWrapper,
  StyledFullWidthList,
  StyledContentWrapper,
};

export default S;
