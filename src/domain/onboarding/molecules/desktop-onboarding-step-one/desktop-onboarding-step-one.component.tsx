import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { LocationAutocompleteWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingBaseData } from '../../onboarding.types';
import { IDesktopOnboardingStepOneProps } from './desktop-onboarding-step-one.types';

export const DesktopOnboardingStepOne = ({
  onContinueButtonClick,
}: IDesktopOnboardingStepOneProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingBaseData>({
    defaultValues: {
      location: '',
      lastName: '',
      firstName: '',
      companyName: '',
      // clientTypeId: '',
      contactEmail: '',
    },
  });

  const onSubmit = handleSubmit(onContinueButtonClick);

  // TODO - upload image + profile type in the next step
  return (
    <DesktopOnboardingFormLayout heading="Create an account" onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3}>
        {/* <Grid item xs={12}>
            <UploadImageWithPreviewWithController
              controllerProps={{
                control,
                name: 'representativeImage',
                rules: {
                  required: true,
                },
              }}
            />
          </Grid> */}
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
        {/* <Grid item xs={6}>
          <SelectWithController
            controllerProps={{
              control,
              name: 'clientTypeId',
              rules: {
                required: true,
              },
            }}
            formControlProps={{
              fullWidth: true,
            }}
            selectProps={{
              fullWidth: true,
              label: 'Profile Type',
              options: clientTypeDropdownOptions,
              labelId: 'desktop-onboarding-step-one-client-type-id-select',
            }}
          />
        </Grid> */}
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
        <Grid item xs={12}>
          <Button size="large" type="submit" variant="contained">
            Continue
          </Button>
        </Grid>
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
