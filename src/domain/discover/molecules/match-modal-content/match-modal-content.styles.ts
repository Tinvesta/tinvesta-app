import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: calc(100vw - ${({ theme }) => `${theme.spacing(3)} - ${theme.spacing(3)}`} - 2px);
  height: calc(100vh - ${({ theme }) => `${theme.spacing(3)} - ${theme.spacing(3)}`} - 2px);
`;

const S = {
  StyledWrapper,
};

export default S;
