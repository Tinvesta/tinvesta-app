import styled from '@emotion/styled';

const StyledWrapper = styled.div<{ minHeight?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};
`;

const S = {
  StyledWrapper,
};

export default S;
