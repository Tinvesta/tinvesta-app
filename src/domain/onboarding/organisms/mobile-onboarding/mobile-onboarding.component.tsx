import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingProps } from './mobile-onboarding.types';

export const MobileOnboarding = ({ teamSizes }: IMobileOnboardingProps): JSX.Element => {
  console.log(teamSizes);
  const { control } = useForm();

  return (
    <MobileOnboardingFormLayout
      continueButtonText="Continue"
      heading="Create your account"
      subHeading="Step 1/5"
    >
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'companyName',
          }}
          inputProps={{
            fullWidth: true,
            label: 'Company Name',
            autoComplete: 'disabled',
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
