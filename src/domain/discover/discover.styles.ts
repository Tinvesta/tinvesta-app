import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  font-size: 80px;
  background: #f9fafb;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  text-shadow: 0 10px 10px #d1d5db;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
};

export default S;
