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
  onBackButtonClick,
  onContinueButtonClick,
  teamSizes,
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
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepFourInvestorHeading}
      subHeading={translations.componentDesktopOnboardingStepFourInvestorSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'teamSizeIds',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            multiple: true,
            fullWidth: true,
            color: 'secondary',
            options: teamSizesDropdownOptions,
            labelId: 'desktop-onboarding-step-four-investor-team-size-ids-select',
            label: translations.componentDesktopOnboardingStepFourInvestorTeamSizeFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investmentStageTypeIds',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            multiple: true,
            fullWidth: true,
            color: 'secondary',
            options: investmentStageTypesDropdownOptions,
            labelId: 'desktop-onboarding-step-four-investor-investment-stage-type-ids-select',
            label: translations.componentDesktopOnboardingStepFourInvestorInvestmentStageFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investmentSizeIds',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            multiple: true,
            fullWidth: true,
            color: 'secondary',
            options: investmentSizesDropdownOptions,
            labelId: 'desktop-onboarding-step-four-investor-investment-size-ids-select',
            label: translations.componentDesktopOnboardingStepFourInvestorInvestmentSizeFieldLabel,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
