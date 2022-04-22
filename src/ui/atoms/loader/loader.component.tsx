import Image from 'next/image';

import { ILoaderProps } from './loader.types';
import { getWidthAndHeightForSize } from './utils';

export const Loader = ({ size = 'medium' }: ILoaderProps): JSX.Element => {
  const { height, width } = getWidthAndHeightForSize(size);

  return (
    <Image
      alt="Loader"
      height={height}
      itemType="image/svg+xml"
      objectFit="fill"
      src="/images/brandmark-loader.svg"
      typeof="image/svg+xml"
      width={width}
    />
  );
};
