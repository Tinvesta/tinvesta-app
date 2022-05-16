import { CircularProgress, useTheme } from '@mui/material';
import Image from 'next/image';

import S from './loader.styles';
import { ILoaderProps } from './loader.types';
import { getWidthAndHeightForSize } from './utils';

const SCALE = 2;

export const Loader = ({ size = 'medium' }: ILoaderProps): JSX.Element => {
  const theme = useTheme();
  const { height, width } = getWidthAndHeightForSize(size);

  const imageSrc =
    theme.palette.mode === 'dark'
      ? '/images/brandmark-transparent-white.png'
      : '/images/brandmark-transparent-black.png';

  const finalWidth = width + width / SCALE;
  const finalHeight = height + height / SCALE;

  return (
    <S.StyledWrapper style={{ width: finalWidth, height: finalHeight }}>
      <CircularProgress color="secondary" style={{ width: finalWidth, height: finalHeight }} />
      <S.StyledImageWrapper>
        <Image alt="Tinvesta" height={height} objectFit="fill" src={imageSrc} width={width} />
      </S.StyledImageWrapper>
    </S.StyledWrapper>
  );
};
