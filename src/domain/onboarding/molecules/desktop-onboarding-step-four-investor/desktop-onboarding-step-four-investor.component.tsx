import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFourInvestorData } from '../../onboarding.types';
import {
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepFourInvestorProps } from './desktop-onboarding-step-four-investor.types';

export const DesktopOnboardingStepFourInvestor = ({
  investmentSizes,
  investmentStageTypes,
  teamSizes,
}: IDesktopOnboardingStepFourInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFourInvestorData>({
    defaultValues: {
      teamSizeIds: [],
      investmentSizeIds: [],
      investmentStageTypeIds: [],
    },
  });

  const investmentStageTypesDropdownOptions =
    mapInvestmentStageTypesToDropdownOptions(investmentStageTypes);
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(investmentSizes);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout heading="Setup Investor" subHeading="Step 4/5" onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3}>
        <Grid item xs={12}>
          <SelectWithController
            controllerProps={{
              control,
              name: 'teamSizeIds',
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
              label: 'Preferred Team Size',
              options: teamSizesDropdownOptions,
              labelId: 'desktop-onboarding-step-two-investor-team-size-id-select',
            }}
          />
        </Grid>
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
              label: 'Preferred Investment Stage',
              options: investmentStageTypesDropdownOptions,
              labelId: 'desktop-onboarding-step-two-investor-investment-stage-type-ids-select',
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
              options: investmentSizesDropdownOptions,
              label: "How much money you'd like to give?",
              labelId: 'desktop-onboarding-step-two-investor-investment-size-ids-select',
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
