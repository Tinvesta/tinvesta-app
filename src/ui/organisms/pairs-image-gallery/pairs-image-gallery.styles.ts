import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { linearGradient } from 'polished';

import { respondToMax } from '@infrastructure';

const StyledGridWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => respondToMax.lg`
    gap: ${theme.spacing(5)};
    padding: ${theme.spacing(5)};
  `}

  ${({ theme }) => respondToMax.md`
    gap: ${theme.spacing(4)};
    padding: ${theme.spacing(4)};
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }) => respondToMax.sm`
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
  z-index: 2;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  text-overflow: ellipsis;
  left: ${({ theme }) => theme.spacing(4)};
  bottom: ${({ theme }) => theme.spacing(4)};
  width: calc(100% - ${({ theme }) => theme.spacing(4)} - ${({ theme }) => theme.spacing(4)});

  ${({ theme }) => respondToMax.sm`
    left: ${theme.spacing(3)};
    bottom: ${theme.spacing(3)};
    width: calc(100% - ${theme.spacing(3)} - ${theme.spacing(3)});
  `}

  ${({ theme }) => respondToMax.xs`
    left: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    width: calc(100% - ${theme.spacing(2)} - ${theme.spacing(2)});
  `}
`;

const StyledGradient = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 75px;
  position: absolute;
  pointer-events: none;
  ${({ theme }) =>
    linearGradient({
      colorStops: ['rgba(255,0,0,0) 0%', theme.palette.primary.main],
      toDirection: 'to bottom',
    })}

  ${respondToMax.xs`
    height: 50px;
  `}
`;

const S = {
  StyledGradient,
  StyledTypography,
  StyledGridWrapper,
  StyledImageWrapper,
};

export default S;
