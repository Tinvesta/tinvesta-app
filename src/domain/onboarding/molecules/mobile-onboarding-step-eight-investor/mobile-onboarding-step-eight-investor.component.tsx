import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import {
  mapInvestorDemandTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepEightInvestorData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepEightInvestorFormData,
  translationStrings,
} from './mobile-onboarding-step-eight-investor.defaults';
import { IMobileOnboardingStepEightInvestorProps } from './mobile-onboarding-step-eight-investor.types';

export const MobileOnboardingStepEightInvestor = ({
  defaultValues = defaultMobileOnboardingStepEightInvestorFormData,
  investorDemandTypes,
  onBackButtonClick,
  onContinueButtonClick,
  teamSizes,
}: IMobileOnboardingStepEightInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepEightInvestorData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investorDemandTypesDropdownOptions = mapInvestorDemandTypesToDropdownOptions(
    investorDemandTypes,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={8}
      heading={translations.componentMobileOnboardingStepEightInvestorHeading}
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
            labelId: 'mobile-onboarding-step-eight-investor-team-size-ids-select',
            label: translations.componentMobileOnboardingStepEightInvestorTeamSizeFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investorDemandTypeIds',
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
            options: investorDemandTypesDropdownOptions,
            label: translations.componentMobileOnboardingStepEightInvestorDemandFieldLabel,
            labelId: 'mobile-onboarding-step-eight-investor-investor-demand-type-ids-select',
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
