import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledMinWidthContainer = styled.div`
  display: flex;
  min-width: 1300px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing(15, 0)};
`;

const StyledTitle = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(10)};
`;

const StyledFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)};
`;

const StyledFooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledFooterLinksTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const StyledFooterLinksLink = styled(Typography)`
  cursor: pointer;
  width: fit-content;

  &:after {
    content: '';
    display: block;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    border-bottom: solid 1px ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const S = {
  StyledTitle,
  StyledWrapper,
  StyledFooterLeft,
  StyledFooterLinksLink,
  StyledFooterContainer,
  StyledFooterLinksTitle,
  StyledMinWidthContainer,
  StyledFooterLinksColumn,
};

export default S;
