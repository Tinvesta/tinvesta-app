import styled from '@emotion/styled';
import { Icon } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 400px;
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${respondToMax.xs`
    width: 100%;
  `}
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const StyledHouseRuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => respondToMax.xs`
    margin-top: ${theme.spacing(4)};
  `}
`;

const StyledHouseRuleIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(3)};
`;

const S = {
  StyledWrapper,
  StyledHouseRuleIcon,
  StyledHeadingWrapper,
  StyledHouseRuleWrapper,
};

export default S;
