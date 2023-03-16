import { ArrowBack as ArrowBackIcon, Close as CloseIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import useOnlineState from 'beautiful-react-hooks/useOnlineState';
import Image from 'next/image';
import { memo } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import S from './mobile-onboarding-form-layout.styles';
import { IMobileOnboardingFormLayoutProps } from './mobile-onboarding-form-layout.types';

const ALL_STEPS = 10;

const MobileOnboardingFormLayoutComponent = ({
  children,
  columnSpacing = 4,
  continueButtonText,
  currentStep,
  heading,
  isLoading,
  onBackButtonClick,
  rowSpacing = 3,
  ...formProps
}: IMobileOnboardingFormLayoutProps): JSX.Element => {
  const isOnline = useOnlineState();
  const { deviceData } = useDeviceDetect();

  const isFirstStep = currentStep === 1;
  const progress = ((currentStep || 1) / ALL_STEPS) * 100;
  const BackIconComponent = isFirstStep ? CloseIcon : ArrowBackIcon;

  const handleBackButtonClick = (): void => {
    if (!isOnline) {
      return;
    }

    onBackButtonClick();
  };

  return (
    <S.StyledWrapper>
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        objectFit="cover"
        src="/images/background/mobile-onboarding.svg"
      />
      {currentStep !== undefined && (
        <S.StyledLinearProgress color="info" value={progress} variant="determinate" />
      )}
      <S.StyledContentWrapper>
        <S.StyledBackButtonWrapper>
          <BackIconComponent
            cursor={isOnline ? 'pointer' : 'default'}
            fontSize={deviceData.isSmallerThanSM ? 'medium' : 'large'}
            onClick={handleBackButtonClick}
          />
        </S.StyledBackButtonWrapper>
        {heading && (
          <S.StyledHeading fontWeight={700} variant={deviceData.isSmallerThanSM ? 'h4' : 'h3'}>
            {heading}
          </S.StyledHeading>
        )}
        <S.StyledFormWrapper {...formProps}>
          <Grid
            container
            columnSpacing={columnSpacing}
            justifyContent="center"
            rowSpacing={rowSpacing}
          >
            {children}
            {continueButtonText && (
              <Grid item marginTop={deviceData.isSmallerThanXS ? 4 : 5} xs={12}>
                <LoadingButton
                  fullWidth
                  color="info"
                  disabled={!isOnline}
                  loading={isLoading}
                  size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
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
