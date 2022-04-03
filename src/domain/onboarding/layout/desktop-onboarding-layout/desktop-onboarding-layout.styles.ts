import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const StyledContentWrapper = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: 0;
  backdrop-filter: blur(6px);
  margin: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledChildrenWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const S = {
  StyledWrapper,
  StyledContentWrapper,
  StyledChildrenWrapper,
};

export default S;
