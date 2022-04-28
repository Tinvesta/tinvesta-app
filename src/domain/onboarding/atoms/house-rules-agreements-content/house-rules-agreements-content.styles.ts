import styled from '@emotion/styled';
import { Icon } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 400px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${respondToMax.xmobile`
    width: 100%;
  `}
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const StyledHouseRuleWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const StyledHouseRuleIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const S = {
  StyledWrapper,
  StyledHouseRuleIcon,
  StyledHeadingWrapper,
  StyledHouseRuleWrapper,
};

export default S;
