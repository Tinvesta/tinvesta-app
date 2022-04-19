import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  font-size: 80px;
  background: #f9fafb;
  align-items: center;
  justify-content: center;
  text-shadow: 0 10px 10px #d1d5db;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  transform: ${() => {
    const rotation = Math.random() * (5 - -5) + -5;

    return `rotate(${rotation}deg)`;
  }};
`;

const S = {
  StyledWrapper,
  StyledImageWrapper,
};

export default S;
