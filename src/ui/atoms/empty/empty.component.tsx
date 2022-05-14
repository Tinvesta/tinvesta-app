import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import { CenterBlockLayout } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './empty.styles';
import { IEmptyProps } from './empty.types';

const EmptyComponent = ({
  actionButtonProps,
  imageSrc = '/images/undraw-empty.svg',
  label,
}: IEmptyProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const imageSize = deviceData.isSmallerThanXS ? 200 : 250;
  const typographyVariant = deviceData.isSmallerThanXS ? 'h6' : 'h5';

  return (
    <CenterBlockLayout>
      <S.StyledWrapper>
        <Image priority alt="Tinvesta" height={imageSize} src={imageSrc} width={imageSize} />
        {label && <S.StyledTypography variant={typographyVariant}>{label}</S.StyledTypography>}
        {actionButtonProps && (
          <Link passHref href={actionButtonProps.linkTo}>
            <S.StyledActionButton color="secondary" variant="contained">
              {actionButtonProps.label}
            </S.StyledActionButton>
          </Link>
        )}
      </S.StyledWrapper>
    </CenterBlockLayout>
  );
};

export const Empty = memo(EmptyComponent);
