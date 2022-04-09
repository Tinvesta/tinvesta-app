import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFiveStartupData } from '../../onboarding.types';

export const DesktopOnboardingStepFiveStartup = (): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFiveStartupData>({
    defaultValues: {
      startupClaim: '',
      visionStatement: '',
      missionStatement: '',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout
      backButtonText="Back"
      continueButtonText="Finish"
      heading="Setup Startup"
      subHeading="Step 5/5"
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'missionStatement',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            rows: 3,
            fullWidth: true,
            multiline: true,
            autoComplete: 'disabled',
            label: 'Mission Statement',
            placeholder: '"Tinvesta builds an efficient and scalable matchmaking service."',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'startupClaim',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            rows: 3,
            fullWidth: true,
            multiline: true,
            autoComplete: 'disabled',
            label: 'Startup Claim',
            placeholder:
              '"Tinvesta enables startups and investors to find each other in the easiest way!"',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'visionStatement',
            rules: {
              required: true,
            },
          }}
          inputProps={{
            rows: 3,
            fullWidth: true,
            multiline: true,
            autoComplete: 'disabled',
            label: 'Vision Statement',
            placeholder:
              '"We will be the leading provider of simple matchmaking services to startups and investors worldwide."',
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
