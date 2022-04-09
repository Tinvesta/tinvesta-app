import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFourStartupData } from '../../onboarding.types';
import {
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
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
    mapInvestmentStageTypesToDropdownOptions(investmentStageTypes);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(investmentSizes);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout
      backButtonText="Back"
      continueButtonText="Continue"
      heading="Setup Startup"
      subHeading="Step 4/5"
      onSubmit={onSubmit}
    >
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
    </DesktopOnboardingFormLayout>
  );
};
