import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  & > .material-icons {
    display: flex;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const S = {
  StyledHeader,
  StyledWrapper,
  StyledContentWrapper,
};

export default S;
