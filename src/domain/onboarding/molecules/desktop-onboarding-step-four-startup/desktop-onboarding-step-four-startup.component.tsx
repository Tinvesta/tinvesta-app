import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import {
  containEntersOrSpaces,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFourStartupData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepFourStartupFormData,
  translationStrings,
} from './desktop-onboarding-step-four-startup.defaults';
import { IDesktopOnboardingStepFourStartupProps } from './desktop-onboarding-step-four-startup.types';

export const DesktopOnboardingStepFourStartup = ({
  defaultValues = defaultDesktopOnboardingStepFourStartupFormData,
  investmentSizes,
  investmentStageTypes,
  onBackButtonClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepFourStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFourStartupData>({
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
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepFourStartupHeading}
      subHeading={translations.componentDesktopOnboardingStepFourStartupSubheading}
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
            labelId: 'desktop-onboarding-step-four-startup-investment-stage-type-ids-select',
            label: translations.componentDesktopOnboardingStepFourStartupInvestmentStageFieldLabel,
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
            labelId: 'desktop-onboarding-step-four-startup-investment-size-ids-select',
            label: translations.componentDesktopOnboardingStepFourStartupInvestmentSizeFieldLabel,
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
                  translations.componentDesktopOnboardingStepFourStartupStartupClaimFieldMaxLengthError,
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
            label: translations.componentDesktopOnboardingStepFourStartupStartupClaimFieldLabel,
            placeholder:
              translations.componentDesktopOnboardingStepFourStartupStartupClaimFieldPlaceholder,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
