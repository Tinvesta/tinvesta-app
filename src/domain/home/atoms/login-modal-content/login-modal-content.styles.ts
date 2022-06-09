import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(5)};
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const S = {
  StyledWrapper,
  StyledButtonsWrapper,
};

export default S;
