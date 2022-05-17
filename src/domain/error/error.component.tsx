import Image from 'next/image';

import { CenterBlockLayout } from '@ui';

import { useDeviceDetect, useTranslation } from '@utils';

import { translationStrings } from './error.defaults';
import S from './error.styles';
import { IErrorProps } from './error.types';

export const Error = ({ children, code, message }: IErrorProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const backgroundImageSrc = deviceData.isSmallerThanMD
    ? '/images/background/mobile-error.svg'
    : '/images/background/desktop-error.svg';

  return (
    <CenterBlockLayout>
      <Image
        priority
        alt={translations.errorPageBackgroundImageAlt}
        layout="fill"
        objectFit="cover"
        src={backgroundImageSrc}
      />
      <S.StyledTypography fontWeight={900} variant="h1">
        {code}
      </S.StyledTypography>
      <S.StyledTypography align="center" variant={deviceData.isSmallerThanXS ? 'body2' : 'h6'}>
        {message}
      </S.StyledTypography>
      <S.StyledActionsWrapper>{children}</S.StyledActionsWrapper>
    </CenterBlockLayout>
  );
};
