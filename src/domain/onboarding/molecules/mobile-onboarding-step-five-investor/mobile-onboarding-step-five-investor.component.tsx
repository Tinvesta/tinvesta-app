import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepFiveInvestorData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepFiveInvestorFormData,
  translationStrings,
} from './mobile-onboarding-step-five-investor.defaults';
import { IMobileOnboardingStepFiveInvestorProps } from './mobile-onboarding-step-five-investor.types';

export const MobileOnboardingStepFiveInvestor = ({
  defaultValues = defaultMobileOnboardingStepFiveInvestorFormData,
  focusMarkets,
  investorProfileTypes,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepFiveInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepFiveInvestorData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investorProfileTypesDropdownOptions = mapInvestorProfileTypesToDropdownOptions(
    investorProfileTypes,
    translations,
  );
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={5}
      heading={translations.componentMobileOnboardingStepFiveInvestorHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investorProfileTypeId',
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
            fullWidth: true,
            color: 'secondary',
            options: investorProfileTypesDropdownOptions,
            labelId: 'mobile-onboarding-step-five-investor-investor-profile-type-id-select',
            label: translations.componentMobileOnboardingStepFiveInvestorYourPositionFieldLabel,
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
            labelId: 'mobile-onboarding-step-five-investor-focus-market-ids-select',
            label: translations.componentMobileOnboardingStepFiveInvestorFocusMarketFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
