import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import {
  containEntersOrSpaces,
  mapInvestmentStageTypesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepEightStartupData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepEightStartupFormData,
  translationStrings,
} from './mobile-onboarding-step-eight-startup.defaults';
import { IMobileOnboardingStepEightStartupProps } from './mobile-onboarding-step-eight-startup.types';

export const MobileOnboardingStepEightStartup = ({
  defaultValues = defaultMobileOnboardingStepEightStartupFormData,
  investmentStageTypes,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepEightStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepEightStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investmentStageTypesDropdownOptions = mapInvestmentStageTypesToDropdownOptions(
    investmentStageTypes,
    translations,
  );

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={8}
      heading={translations.componentMobileOnboardingStepEightStartupHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
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
            labelId: 'mobile-onboarding-step-eight-startup-investment-stage-type-ids-select',
            label: translations.componentMobileOnboardingStepEightStartupInvestmentStageFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'startupClaim',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              maxLength: {
                value: 160,
                message:
                  // eslint-disable-next-line max-len
                  translations.componentMobileOnboardingStepEightStartupStartupClaimFieldMaxLengthError,
              },
              validate: {
                startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                  translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                ),
                containEntersOrSpaces: containEntersOrSpaces(
                  translations.commonFormFieldErrorContainEntersOrSpaces,
                ),
              },
            },
          }}
          inputProps={{
            rows: 3,
            fullWidth: true,
            multiline: true,
            color: 'secondary',
            autoComplete: 'disabled',
            label: translations.componentMobileOnboardingStepEightStartupStartupClaimFieldLabel,
            placeholder:
              translations.componentMobileOnboardingStepEightStartupStartupClaimFieldPlaceholder,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
