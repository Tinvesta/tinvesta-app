import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import {
  LocationAutocompleteWithController,
  SelectWithController,
  TextFieldWithController,
} from '@ui';

import { DesktopOnboardingLayout } from '../../atoms';
import { IDesktopoOnboardingStepOneProps } from './desktop-onboarding-step-one.types';
import { mapClientTypesToDropdownOptions } from './utils';

export const DesktopOnboardingStepOne = ({
  clientTypes,
}: IDesktopoOnboardingStepOneProps): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      location: '',
      lastName: '',
      firstName: '',
      contactEmail: '',
      clientTypeId: '',
    },
  });

  const clientTypeDropdownOptions = mapClientTypesToDropdownOptions(clientTypes);

  const onSubmit = handleSubmit((data) => console.log(data));

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
                label: 'Profile Type',
                autoComplete: 'clientTypeId',
                options: clientTypeDropdownOptions,
                labelId: 'desktop-onboarding-step-one-client-types',
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
