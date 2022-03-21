import styled from '@emotion/styled';

const StyledSubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > .MuiButton-root {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`;

const S = {
  StyledSubHeaderWrapper,
};

export default S;
