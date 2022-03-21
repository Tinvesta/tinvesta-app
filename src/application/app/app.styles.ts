import styled from '@emotion/styled';

const StyledWrapper = styled.main`
  background-color: ${({ theme }) => theme.palette.background.default};
  display: block;
  height: 100vh;
  position: relative;
  width: 100vw;
`;

const S = {
  StyledWrapper,
};

export default S;
