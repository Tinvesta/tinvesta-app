import styled from '@emotion/styled';

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledImagePlaceholder = styled.div`
  width: 150px;
  height: 225px;
  border: 1px dashed;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledModalContentWrapper = styled.div`
  display: flex;
  text-align: center;
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
  StyledImage,
  StyledWrapper,
  StyledImagePlaceholder,
  StyledModalContentWrapper,
};

export default S;
