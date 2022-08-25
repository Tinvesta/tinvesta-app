import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import { CenterBlockLayout } from '@ui';

import S from './empty.styles';
import { IEmptyProps } from './empty.types';

const EmptyComponent = ({
  actionButtonProps,
  imageSrc = '/images/undraw-empty.svg',
  label,
}: IEmptyProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const imageSize = deviceData.isSmallerThanXS ? 200 : 250;
  const typographyVariant = deviceData.isSmallerThanXS ? 'body1' : 'h5';
  const buttonSize = deviceData.isSmallerThanXS ? 'small' : 'medium';

  return (
    <CenterBlockLayout>
      <S.StyledWrapper>
        <Image priority alt="Tinvesta" height={imageSize} src={imageSrc} width={imageSize} />
        {label && <S.StyledTypography variant={typographyVariant}>{label}</S.StyledTypography>}
        {actionButtonProps && (
          <Link passHref href={actionButtonProps.linkTo}>
            <S.StyledActionButton color="info" size={buttonSize} variant="contained">
              {actionButtonProps.label}
            </S.StyledActionButton>
          </Link>
        )}
      </S.StyledWrapper>
    </CenterBlockLayout>
  );
};

export const Empty = memo(EmptyComponent);
