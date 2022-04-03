import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledChildrenWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const S = {
  StyledWrapper,
  StyledChildrenWrapper,
};

export default S;
