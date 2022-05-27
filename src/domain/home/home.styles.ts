import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledSubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > .MuiButton-root {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
`;

const S = {
  StyledWrapper,
  StyledSubHeaderWrapper,
};

export default S;
