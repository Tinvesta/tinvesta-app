import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
