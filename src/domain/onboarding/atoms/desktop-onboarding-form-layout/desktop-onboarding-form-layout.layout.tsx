import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

import { CenterBlockLayout } from '@ui';

import S from './desktop-onboarding-form-layout.styles';
import { IDesktopOnboardingFormLayoutProps } from './desktop-onboarding-form-layout.types';

const DesktopOnboardingFormLayoutComponent = ({
  backButtonText,
  children,
  continueButtonText,
  heading,
  onBackButtonClick,
  subHeading,
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
        {subHeading && <S.StyledHeading variant="caption">{subHeading}</S.StyledHeading>}
        <S.StyledHeading fontWeight={700} variant="h5">
          {heading}
        </S.StyledHeading>
        <S.StyledFormWrapper {...formProps}>
          <Grid container columnSpacing={4} rowSpacing={3} xs={12}>
            {children}
            <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
              {backButtonText && (
                <Grid item xs={3}>
                  <Button fullWidth size="large" variant="outlined" onClick={onBackButtonClick}>
                    {backButtonText}
                  </Button>
                </Grid>
              )}
              {continueButtonText && (
                <Grid item xs={3}>
                  <Button fullWidth size="large" type="submit" variant="contained">
                    {continueButtonText}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </S.StyledFormWrapper>
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  </CenterBlockLayout>
);

export const DesktopOnboardingFormLayout = memo(DesktopOnboardingFormLayoutComponent);
