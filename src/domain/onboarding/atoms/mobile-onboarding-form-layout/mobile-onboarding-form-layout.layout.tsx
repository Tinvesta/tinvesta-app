import { ArrowBack as ArrowBackIcon, Close as CloseIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

import { useDeviceDetect } from '@utils';

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
  const { deviceData } = useDeviceDetect();

  const isFirstStep = currentStep === 1;
  const progress = ((currentStep || 1) / ALL_STEPS) * 100;
  const BackIconComponent = isFirstStep ? CloseIcon : ArrowBackIcon;

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
        <S.StyledLinearProgress color="inherit" value={progress} variant="determinate" />
      )}
      <S.StyledContentWrapper>
        <S.StyledBackButtonWrapper>
          <BackIconComponent
            cursor="pointer"
            fontSize={deviceData.isSmallerThanSM ? 'medium' : 'large'}
            onClick={onBackButtonClick}
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
                  color="secondary"
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
