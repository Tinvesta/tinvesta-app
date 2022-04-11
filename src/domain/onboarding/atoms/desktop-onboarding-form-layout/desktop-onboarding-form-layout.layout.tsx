import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
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
  isLoading,
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
        {heading && (
          <S.StyledHeading fontWeight={700} variant="h5">
            {heading}
          </S.StyledHeading>
        )}
        <S.StyledFormWrapper {...formProps}>
          <Grid container columnSpacing={4} justifyContent="center" rowSpacing={3}>
            {children}
            <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
              {backButtonText && (
                <Grid item xs={3}>
                  <LoadingButton
                    fullWidth
                    disabled={isLoading}
                    size="large"
                    variant="outlined"
                    onClick={onBackButtonClick}
                  >
                    {backButtonText}
                  </LoadingButton>
                </Grid>
              )}
              {continueButtonText && (
                <Grid item xs={3}>
                  <LoadingButton
                    fullWidth
                    loading={isLoading}
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {continueButtonText}
                  </LoadingButton>
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
