import { Button, Grid } from '@mui/material';
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
    <DesktopOnboardingFormLayout heading="Setup Startup" subHeading="Step 3/3" onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3}>
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
        <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
          <Grid item xs={3}>
            <Button fullWidth size="large" variant="outlined">
              Back
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth size="large" type="submit" variant="contained">
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
