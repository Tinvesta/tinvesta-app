import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

import { useDeviceDetect } from '@utils';

import S from './mobile-onboarding-form-layout.styles';
import { IMobileOnboardingFormLayoutProps } from './mobile-onboarding-form-layout.types';

const MobileOnboardingFormLayoutComponent = ({
  children,
  continueButtonText,
  heading,
  isLoading,
  onBackButtonClick,
  subHeading,
  ...formProps
}: IMobileOnboardingFormLayoutProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const getHeaderVariant = () => {
    if (deviceData.isSmallerThanXS) {
      return 'h5';
    }

    if (deviceData.isSmallerThanSM) {
      return 'h4';
    }

    return 'h3';
  };

  return (
    <S.StyledWrapper>
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        objectFit="cover"
        src="/images/mobile-onboarding-background.svg"
      />
      <S.StyledContentWrapper>
        {subHeading && <S.StyledHeading variant="body1">{subHeading}</S.StyledHeading>}
        {heading && (
          <S.StyledHeading fontWeight={700} variant={getHeaderVariant()}>
            {heading}
          </S.StyledHeading>
        )}
        <S.StyledFormWrapper {...formProps}>
          <Grid container columnSpacing={4} justifyContent="center" rowSpacing={3}>
            {children}
            {continueButtonText && (
              <Grid item marginTop={4} xs={12}>
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
