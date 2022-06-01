import styled from '@emotion/styled';

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
`;

const StyledTrackVertical = styled.div`
  height: 100%;
  right: 1px;
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
