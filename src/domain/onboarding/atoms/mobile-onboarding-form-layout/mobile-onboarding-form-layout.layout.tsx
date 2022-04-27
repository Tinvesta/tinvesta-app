import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

import { useDeviceDetect } from '@utils';

import S from './mobile-onboarding-form-layout.styles';
import { IMobileOnboardingFormLayoutProps } from './mobile-onboarding-form-layout.types';

const ALL_STEPS = 9;

const MobileOnboardingFormLayoutComponent = ({
  children,
  continueButtonText,
  currentStep,
  heading,
  isLoading,
  onBackButtonClick,
  ...formProps
}: IMobileOnboardingFormLayoutProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const getHeaderVariant = () => {
    if (deviceData.isSmallerThanSM) {
      return 'h4';
    }

    return 'h3';
  };

  const progress = ((currentStep || 1) / ALL_STEPS) * 100;

  return (
    <S.StyledWrapper>
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        objectFit="cover"
        src="/images/mobile-onboarding-background.svg"
      />
      {currentStep !== undefined && (
        <S.StyledLinearProgress color="inherit" value={progress} variant="determinate" />
      )}
      <S.StyledContentWrapper>
        {heading && (
          <S.StyledHeading fontWeight={700} variant={getHeaderVariant()}>
            {heading}
          </S.StyledHeading>
        )}
        <S.StyledFormWrapper {...formProps}>
          <Grid container columnSpacing={4} justifyContent="center" rowSpacing={3}>
            {children}
            {continueButtonText && (
              <Grid item marginTop={deviceData.isSmallerThanXS ? 3 : 4} xs={12}>
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
        </S.StyledFormWrapper>
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};

export const MobileOnboardingFormLayout = memo(MobileOnboardingFormLayoutComponent);
