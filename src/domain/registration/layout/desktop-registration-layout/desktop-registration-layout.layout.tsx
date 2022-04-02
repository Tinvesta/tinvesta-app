import Image from 'next/image';

import { LinearProgressWithLabel } from '@ui';

import S from './desktop-registration-layout.styles';
import { IDesktopRegistrationLayoutProps } from './desktop-registration-layout.types';

export const DesktopRegistrationLayout = ({
  children,
  progress,
}: IDesktopRegistrationLayoutProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledAside>
      <Image alt="Tinvesta" height={300} src="/images/animated-full-logo.svg" width={300} />
    </S.StyledAside>
    <S.StyledContentWrapper>
      <LinearProgressWithLabel value={progress} />
      <S.StyledChildrenWrapper>{children}</S.StyledChildrenWrapper>
    </S.StyledContentWrapper>
  </S.StyledWrapper>
);
