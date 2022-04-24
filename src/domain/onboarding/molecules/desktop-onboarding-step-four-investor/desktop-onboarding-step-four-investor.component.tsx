import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import {
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
} from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFourInvestorData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepFourInvestorFormData,
  translationStrings,
} from './desktop-onboarding-step-four-investor.defaults';
import { IDesktopOnboardingStepFourInvestorProps } from './desktop-onboarding-step-four-investor.types';

export const DesktopOnboardingStepFourInvestor = ({
  defaultValues = defaultDesktopOnboardingStepFourInvestorFormData,
  investmentSizes,
  investmentStageTypes,
  teamSizes,
  onBackButtonClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepFourInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFourInvestorData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(
    investmentSizes,
    translations,
  );
  const investmentStageTypesDropdownOptions = mapInvestmentStageTypesToDropdownOptions(
    investmentStageTypes,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText="Back"
      continueButtonText="Continue"
      heading="Setup Investor"
      subHeading="Step 4/5"
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
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
    </DesktopOnboardingFormLayout>
  );
};
