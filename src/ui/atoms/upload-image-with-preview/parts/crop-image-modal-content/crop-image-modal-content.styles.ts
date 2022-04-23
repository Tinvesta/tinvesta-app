import styled from '@emotion/styled';

const StyledModalContentWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  > canvas {
    overflow: hidden;
    border: 1px dashed;
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }
`;

const S = {
  StyledModalContentWrapper,
};

export default S;
