import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFiveInvestorData } from '../../onboarding.types';
import { mapInvestorDemandTypesToDropdownOptions } from '../../utils';
import { IDesktopOnboardingStepFiveInvestorProps } from './desktop-onboarding-step-five-investor.types';

export const DesktopOnboardingStepFiveInvestor = ({
  investorDemandTypes,
}: IDesktopOnboardingStepFiveInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFiveInvestorData>({
    defaultValues: {
      whatYouAreLookingFor: '',
      investorDemandTypeIds: [],
    },
  });

  const investorDemandTypesDropdownOptions =
    mapInvestorDemandTypesToDropdownOptions(investorDemandTypes);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout heading="Setup Investor" subHeading="Step 5/5" onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3} xs={12}>
        <Grid item xs={12}>
          <SelectWithController
            controllerProps={{
              control,
              name: 'investorDemandTypeIds',
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
              label: 'Demand',
              options: investorDemandTypesDropdownOptions,
              labelId: 'desktop-onboarding-step-five-investor-investor-demand-type-ids-select',
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
              rows: 4,
              fullWidth: true,
              multiline: true,
              autoComplete: 'disabled',
              label: 'Why should a startup match with you?',
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
