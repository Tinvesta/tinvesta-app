import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { SelectWithController, UploadImageWithPreviewWithController } from '@ui';

import { useTranslation } from '@utils';

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

  const onSubmit = handleSubmit((data) => {
    if (!data.firstImage && !data.secondImage && !data.thirdImage && !data.fourthImage) {
      toast.info(translations.componentDesktopOnboardingStepTwoInfoUploadAtLeastOneImage);

      return;
    }

    onContinueButtonClick(data);
  });

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepTwoHeading}
      subHeading={translations.componentDesktopOnboardingStepTwoSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid container marginBottom={4} marginTop={2} xs={10}>
        <Grid item xs={3}>
          <UploadImageWithPreviewWithController
            controllerProps={{
              control,
              name: 'firstImage',
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <UploadImageWithPreviewWithController
            controllerProps={{
              control,
              name: 'secondImage',
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <UploadImageWithPreviewWithController
            controllerProps={{
              control,
              name: 'thirdImage',
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <UploadImageWithPreviewWithController
            controllerProps={{
              control,
              name: 'fourthImage',
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={10}>
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
