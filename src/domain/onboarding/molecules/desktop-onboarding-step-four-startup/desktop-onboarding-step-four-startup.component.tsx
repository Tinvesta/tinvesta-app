import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFourStartupData } from '../../onboarding.types';
import {
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypestoDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepFourStartupProps } from './desktop-onboarding-step-four-startup.types';

export const DesktopOnboardingStepFourStartup = ({
  investmentSizes,
  investmentStageTypes,
}: IDesktopOnboardingStepFourStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFourStartupData>({
    defaultValues: {
      investmentSizeIds: [],
      whatYouAreLookingFor: '',
      investmentStageTypeIds: [],
    },
  });

  const investmentStageTypesDropdownOptions =
    mapInvestmentStageTypestoDropdownOptions(investmentStageTypes);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(investmentSizes);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout heading="Setup Startup" subHeading="Step 2/3" onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3}>
        <Grid item xs={12}>
          <SelectWithController
            controllerProps={{
              control,
              name: 'investmentStageTypeIds',
              rules: {
                required: true,
              },
            }}
            formControlProps={{
              fullWidth: true,
            }}
            selectProps={{
              multiple: true,
              fullWidth: true,
              label: 'Investment Stage',
              options: investmentStageTypesDropdownOptions,
              labelId: 'desktop-onboarding-step-four-startup-investment-stage-type-ids-select',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectWithController
            controllerProps={{
              control,
              name: 'investmentSizeIds',
              rules: {
                required: true,
              },
            }}
            formControlProps={{
              fullWidth: true,
            }}
            selectProps={{
              multiple: true,
              fullWidth: true,
              label: 'How much money do I need?',
              options: investmentSizesDropdownOptions,
              labelId: 'desktop-onboarding-step-four-startup-investment-size-ids-select',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldWithController
            controllerProps={{
              control,
              name: 'whatYouAreLookingFor',
              rules: {
                required: true,
              },
            }}
            inputProps={{
              rows: 3,
              fullWidth: true,
              multiline: true,
              autoComplete: 'disabled',
              label: 'What are you looking for?',
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
