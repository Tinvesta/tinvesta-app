import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepSevenStartupData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepSevenStartupFormData,
  translationStrings,
} from './mobile-onboarding-step-seven-startup.defaults';
import { IMobileOnboardingStepSevenStartupProps } from './mobile-onboarding-step-seven-startup.types';

export const MobileOnboardingStepSevenStartup = ({
  defaultValues = defaultMobileOnboardingStepSevenStartupFormData,
  focusMarkets,
  investmentSizes,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepSevenStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepSevenStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(
    investmentSizes,
    translations,
  );
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={7}
      heading={translations.componentMobileOnboardingStepSevenStartupHeading}
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
            label: translations.componentMobileOnboardingStepSevenStartupInvestmentSizeFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'focusMarketIds',
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
            options: focusMarketsDropdownOptions,
            labelId: 'mobile-onboarding-step-seven-startup-focus-market-ids-select',
            label: translations.componentMobileOnboardingStepSevenStartupFocusMarketFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
