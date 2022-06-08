import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;
`;

const S = {
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
