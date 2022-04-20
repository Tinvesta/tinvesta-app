import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  font-size: 80px;
  overflow: hidden;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
};

export default S;
