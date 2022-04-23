import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, UploadImagesWithController } from '@ui';

import { formArrayMinLength, useTranslation } from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';
import { mapClientTypesToDropdownOptions } from '../../utils';
import {
  defaultDesktopOnboardingStepTwoFormData,
  translationStrings,
} from './desktop-onboarding-step-two.defaults';
import { IDesktopOnboardingStepTwoProps } from './desktop-onboarding-step-two.types';

export const DesktopOnboardingStepTwo = ({
  clientTypes,
  onBackButtonClick,
  defaultValues = defaultDesktopOnboardingStepTwoFormData,
  onContinueButtonClick,
}: IDesktopOnboardingStepTwoProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepTwoData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const clientTypesDropdownOptions = mapClientTypesToDropdownOptions(clientTypes);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepTwoHeading}
      subHeading={translations.componentDesktopOnboardingStepTwoSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
        <UploadImagesWithController
          controllerProps={{
            control,
            name: 'images',
            rules: {
              validate: {
                formArrayMinLength: formArrayMinLength(1, 'Please upload at least one image'),
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'clientTypeId',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            fullWidth: true,
            options: clientTypesDropdownOptions,
            labelId: 'desktop-onboarding-step-two-client-type-id-select',
            label: translations.componentDesktopOnboardingStepTwoProfileTypeFieldLabel,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
