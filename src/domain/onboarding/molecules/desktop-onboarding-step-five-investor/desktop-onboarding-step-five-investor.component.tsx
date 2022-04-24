import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFiveInvestorData } from '../../onboarding.types';
import { mapInvestorDemandTypesToDropdownOptions } from '../../utils';
import { defaultDesktopOnboardingStepFiveInvestorFormData } from './desktop-onboarding-step-five-investor.defaults';
import { IDesktopOnboardingStepFiveInvestorProps } from './desktop-onboarding-step-five-investor.types';

export const DesktopOnboardingStepFiveInvestor = ({
  defaultValues = defaultDesktopOnboardingStepFiveInvestorFormData,
  investorDemandTypes,
  onBackButtonClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepFiveInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFiveInvestorData>({
    defaultValues,
  });

  const investorDemandTypesDropdownOptions =
    mapInvestorDemandTypesToDropdownOptions(investorDemandTypes);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText="Back"
      continueButtonText="Continue"
      heading="Setup Investor"
      subHeading="Step 5/5"
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
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
            name: 'whatAreYouLookingFor',
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
    </DesktopOnboardingFormLayout>
  );
};
