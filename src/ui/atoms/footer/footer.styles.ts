import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledWidthContainer = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing(15, 0)};

  ${({ theme }) => respondToMax.lg`
    width: 95%;
    padding: ${theme.spacing(13, 0)};
  `}

  ${({ theme }) => respondToMax.md`
    padding: ${theme.spacing(10, 0)};
  `}

  ${({ theme }) => respondToMax.xs`
    padding: ${theme.spacing(8, 3)};
  `}
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

  ${({ theme }) => respondToMax.md`
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing(6)};
    padding-top: ${theme.spacing(6)};
  `}
`;

const StyledFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  ${respondToMax.md`
    gap: 0;
    align-items: center;
    flex-direction: column;
  `}
`;

const StyledFooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => respondToMax.md`
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `}

  ${respondToMax.xs`
    gap: 0;
  `}
`;

const StyledFooterLinksTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => respondToMax.md`
    margin-bottom:  ${theme.spacing(2)};
  `}
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

const StyledExternalLink = styled.a`
  width: fit-content;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const S = {
  StyledTitle,
  StyledWrapper,
  StyledFooterLeft,
  StyledExternalLink,
  StyledWidthContainer,
  StyledFooterLinksLink,
  StyledFooterContainer,
  StyledFooterLinksTitle,
  StyledFooterLinksColumn,
};

export default S;
