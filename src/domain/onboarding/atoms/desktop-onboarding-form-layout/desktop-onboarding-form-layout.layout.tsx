import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

import { CenterBlockLayout } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './desktop-onboarding-form-layout.styles';
import { IDesktopOnboardingFormLayoutProps } from './desktop-onboarding-form-layout.types';

const DesktopOnboardingFormLayoutComponent = ({
  addArrowToBackButton = true,
  backButtonText,
  centerActionButtons = false,
  children,
  continueButtonText,
  heading,
  isLoading,
  onBackButtonClick,
  subHeading,
  ...formProps
}: IDesktopOnboardingFormLayoutProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  return (
    <CenterBlockLayout>
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        objectFit="cover"
        src="/images/background/desktop-onboarding.svg"
      />
      <S.StyledWrapper>
        <S.StyledContentWrapper>
          {subHeading && <S.StyledHeading variant="body1">{subHeading}</S.StyledHeading>}
          {heading && (
            <S.StyledHeading fontWeight={700} variant="h3">
              {heading}
            </S.StyledHeading>
          )}
          <S.StyledFormWrapper {...formProps}>
            <Grid
              container
              columnSpacing={deviceData.isSmallerThanXS ? 4 : 5}
              justifyContent="center"
              rowSpacing={deviceData.isSmallerThanMD ? 1 : 3}
            >
              {children}
              <Grid
                item
                display="flex"
                gap={deviceData.isSmallerThanXS ? 4 : 5}
                justifyContent={centerActionButtons ? 'center' : 'flex-end'}
                xs={12}
              >
                {backButtonText && (
                  <Grid item xs={3}>
                    <LoadingButton
                      fullWidth
                      color="secondary"
                      disabled={isLoading}
                      size="large"
                      startIcon={addArrowToBackButton && <ArrowBackIcon />}
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
                      color="secondary"
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
};

export const DesktopOnboardingFormLayout = memo(DesktopOnboardingFormLayoutComponent);
