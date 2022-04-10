import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { LocationAutocompleteWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepOneData } from '../../onboarding.types';
import { defaultDesktopOnboardingStepOneFormData } from './desktop-onboarding-step-one.defaults';
import { IDesktopOnboardingStepOneProps } from './desktop-onboarding-step-one.types';

export const DesktopOnboardingStepOne = ({
  defaultValues = defaultDesktopOnboardingStepOneFormData,
  onContinueButtonClick,
}: IDesktopOnboardingStepOneProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepOneData>({
    defaultValues,
  });

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      continueButtonText="Continue"
      heading="General"
      subHeading="Step 1/5"
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'firstName',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            fullWidth: true,
            label: 'First Name',
            autoComplete: 'disabled',
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'lastName',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            fullWidth: true,
            label: 'Last Name',
            autoComplete: 'disabled',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'contactEmail',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            fullWidth: true,
            label: 'Contact Email',
            autoComplete: 'disabled',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'companyName',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            fullWidth: true,
            label: 'Company Name',
            autoComplete: 'disabled',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <LocationAutocompleteWithController
          controllerProps={{
            control,
            name: 'location',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            label: 'Location',
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
