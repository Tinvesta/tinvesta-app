import { CircularProgress } from '@mui/material';
import Image from 'next/image';

import S from './loader.styles';
import { ILoaderProps } from './loader.types';
import { getWidthAndHeightForSize } from './utils';

const SCALE = 2;

export const Loader = ({ size = 'medium' }: ILoaderProps): JSX.Element => {
  const { height, width } = getWidthAndHeightForSize(size);

  const finalWidth = width + width / SCALE;
  const finalHeight = height + height / SCALE;

  return (
    <S.StyledWrapper style={{ width: finalWidth, height: finalHeight }}>
      <CircularProgress color="secondary" style={{ width: finalWidth, height: finalHeight }} />
      <S.StyledImageWrapper>
        <Image
          alt="Tinvesta"
          height={height}
          objectFit="fill"
          src="/images/brandmark-transparent-white.png"
          width={width}
        />
      </S.StyledImageWrapper>
    </S.StyledWrapper>
  );
};
