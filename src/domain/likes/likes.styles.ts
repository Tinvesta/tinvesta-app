import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
`;

const S = {
  StyledWrapper,
};

export default S;
