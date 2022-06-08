import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledLogoWrapper = styled.span<{ height: number }>`
  right: 50%;
  position: absolute;
  transform: translateX(50%);
  height: ${({ height }) => height}px;
`;

const StyledContentWrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuAnimation = styled.div`
  z-index: 20;
  width: 75px;
  height: 75px;
  cursor: pointer;
  position: relative;
`;

const S = {
  StyledWrapper,
  StyledLogoWrapper,
  StyledMenuAnimation,
  StyledContentWrapper,
};

export default S;
