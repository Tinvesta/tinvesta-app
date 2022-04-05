import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import {
  LocationAutocompleteWithController,
  SelectWithController,
  TextFieldWithController,
} from '@ui';

import { DesktopOnboardingLayout } from '../../atoms';
import { IDesktopOnboardingBaseData } from '../../onboarding.types';
import { IDesktopOnboardingStepOneProps } from './desktop-onboarding-step-one.types';
import { mapClientTypesToDropdownOptions } from './utils';

export const DesktopOnboardingStepOne = ({
  clientTypes,
  onContinueButtonClick,
}: IDesktopOnboardingStepOneProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingBaseData>({
    defaultValues: {
      location: '',
      lastName: '',
      firstName: '',
      clientTypeId: 0,
      contactEmail: '',
    },
  });

  const clientTypeDropdownOptions = mapClientTypesToDropdownOptions(clientTypes);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingLayout heading="Create an account">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          margin: '0 auto',
        }}
        onSubmit={onSubmit}
      >
        <Grid container columnSpacing={4} rowSpacing={3}>
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
                autoComplete: 'firstName',
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
                autoComplete: 'lastName',
              }}
            />
          </Grid>
          <Grid item xs={6}>
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
                autoComplete: 'contactEmail',
              }}
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={12}>
            <Button size="large" type="submit" variant="contained">
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </DesktopOnboardingLayout>
  );
};
