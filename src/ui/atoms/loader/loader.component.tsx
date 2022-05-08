import { Box, CircularProgress, useTheme } from '@mui/material';
import Image from 'next/image';

import { ILoaderProps } from './loader.types';
import { getWidthAndHeightForSize } from './utils';

const SCALE = 10;

export const Loader = ({ size = 'medium' }: ILoaderProps): JSX.Element => {
  const theme = useTheme();
  const { height, width } = getWidthAndHeightForSize(size);

  const imageSrc =
    theme.palette.mode === 'dark'
      ? '/images/brandmark-transparent-white.png'
      : '/images/brandmark-transparent-black.png';

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress style={{ width: width + width / SCALE, height: height + height / SCALE }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image alt="Tinvesta" height={height} objectFit="fill" src={imageSrc} width={width} />
      </Box>
    </Box>
  );
};
