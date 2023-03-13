import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import {
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepSevenInvestorData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepSevenInvestorFormData,
  translationStrings,
} from './mobile-onboarding-step-seven-investor.defaults';
import { IMobileOnboardingStepSevenInvestorProps } from './mobile-onboarding-step-seven-investor.types';

export const MobileOnboardingStepSevenInvestor = ({
  defaultValues = defaultMobileOnboardingStepSevenInvestorFormData,
  investmentSizes,
  investmentStageTypes,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepSevenInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepSevenInvestorData>({
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

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={7}
      heading={translations.componentMobileOnboardingStepSevenInvestorHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
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
            labelId: 'mobile-onboarding-step-seven-startup-investment-size-ids-select',
            label: translations.componentMobileOnboardingStepSevenInvestorInvestmentSizeFieldLabel,
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
            labelId: 'mobile-onboarding-step-seven-investor-investment-stage-type-ids-select',
            label: translations.componentMobileOnboardingStepSevenInvestorInvestmentStageFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
