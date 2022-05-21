import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { respondToMax } from '@infrastructure';

const StyledGridWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => respondToMax.small`
    gap: ${theme.spacing(4)};
    padding: ${theme.spacing(4)};
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }) => respondToMax.mobile`
    gap: ${theme.spacing(3)};
    padding: ${theme.spacing(3)};
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms ease-in-out;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  &:hover {
    transform: scale(1.03);
  }
`;

const StyledTypography = styled(Typography)`
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  text-overflow: ellipsis;
  left: ${({ theme }) => theme.spacing(3)};
  bottom: ${({ theme }) => theme.spacing(3)};
  width: calc(100% - ${({ theme }) => theme.spacing(3)} - ${({ theme }) => theme.spacing(3)});

  ${({ theme }) => respondToMax.mobile`
    left: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    width: calc(100% - ${theme.spacing(2)} - ${theme.spacing(2)});
  `}

  ${({ theme }) => respondToMax.xmobile`
    left: ${theme.spacing(1)};
    bottom: ${theme.spacing(1)};
    width: calc(100% - ${theme.spacing(1)} - ${theme.spacing(1)});
  `}
`;

const S = {
  StyledTypography,
  StyledGridWrapper,
  StyledImageWrapper,
};

export default S;
