import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { UploadImagesWithController } from '@ui';

import { formArrayMinLength, useTranslation } from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepFourData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepFourFormData,
  translationStrings,
} from './mobile-onboarding-step-four.defaults';
import { IMobileOnboardingStepFourProps } from './mobile-onboarding-step-four.types';

export const MobileOnboardingStepFour = ({
  defaultValues = defaultMobileOnboardingStepFourFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepFourProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepFourData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={4}
      heading={translations.componentMobileOnboardingStepFourHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item alignItems="center" justifyContent="center" xs={12}>
        <UploadImagesWithController
          controllerProps={{
            control,
            name: 'images',
            rules: {
              validate: {
                formArrayMinLength: formArrayMinLength(
                  1,
                  translations.componentMobileOnboardingStepFourImagesFieldMinLengthError,
                ),
              },
            },
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
