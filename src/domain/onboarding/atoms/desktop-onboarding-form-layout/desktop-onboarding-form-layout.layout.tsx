import Image from 'next/image';
import { memo } from 'react';

import { CenterBlockLayout } from '@ui';

import S from './desktop-onboarding-form-layout.styles';
import { IDesktopOnboardingFormLayoutProps } from './desktop-onboarding-form-layout.types';

const DesktopOnboardingFormLayoutComponent = ({
  children,
  heading,
  ...formProps
}: IDesktopOnboardingFormLayoutProps): JSX.Element => (
  <CenterBlockLayout>
    <S.StyledWrapper>
      <S.StyledImageWrapper>
        <Image
          priority
          alt="Triangles"
          layout="fill"
          objectFit="cover"
          src="/images/triangles.svg"
        />
      </S.StyledImageWrapper>
      <S.StyledContentWrapper>
        <S.StyledHeading align="left" fontWeight={700} variant="h4">
          {heading}
        </S.StyledHeading>
        <S.StyledFormWrapper {...formProps}>{children}</S.StyledFormWrapper>
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  </CenterBlockLayout>
);

export const DesktopOnboardingFormLayout = memo(DesktopOnboardingFormLayoutComponent);
