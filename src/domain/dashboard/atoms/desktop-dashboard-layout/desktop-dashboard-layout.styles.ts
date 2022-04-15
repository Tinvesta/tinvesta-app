import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const StyledAsideWrapper = styled.aside`
  width: 400px;
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledContentWrapper = styled.div``;

const S = {
  StyledWrapper,
  StyledAsideWrapper,
  StyledContentWrapper,
};

export default S;
