import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const StyledAsideWrapper = styled.aside`
  width: 350px;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3)} 0 ${({ theme }) => theme.spacing(4)} 0;
`;

const StyledUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.grey[700]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const StyledUserInfoDetails = styled.div``;

const StyledContentWrapper = styled.div``;

const S = {
  StyledWrapper,
  StyledLogoWrapper,
  StyledAsideWrapper,
  StyledContentWrapper,
  StyledUserInfoDetails,
  StyledUserInfoWrapper,
};

export default S;
