import styled from '@emotion/styled';

import { respondToMax } from '@infrastructure';

const StyledThumbHorizontal = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledThumbVertical = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledTrackHorizontal = styled.div`
  bottom: 1px;
  width: 100%;

  ${respondToMax.sm`
    height: 5px !important;
  `}

  ${respondToMax.xs`
    height: 4px !important;
  `}
`;

const StyledTrackVertical = styled.div`
  height: 100%;
  right: 1px;

  ${respondToMax.sm`
    width: 5px !important;
  `}

  ${respondToMax.xs`
    width: 4px !important;
  `}
`;

const StyledView = styled.div``;

const S = {
  StyledView,
  StyledThumbVertical,
  StyledTrackVertical,
  StyledThumbHorizontal,
  StyledTrackHorizontal,
};

export default S;
