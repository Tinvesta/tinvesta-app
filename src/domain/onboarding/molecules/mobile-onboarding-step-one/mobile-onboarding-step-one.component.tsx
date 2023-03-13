import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { containSingleWord, startsOrEndsWithWhitespace, useTranslation } from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepOneData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepOneFormData,
  translationStrings,
} from './mobile-onboarding-step-one.defaults';
import { IMobileOnboardingStepOneProps } from './mobile-onboarding-step-one.types';

export const MobileOnboardingStepOne = ({
  defaultValues = defaultMobileOnboardingStepOneFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepOneProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepOneData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={1}
      heading={translations.componentMobileOnboardingStepOneHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'firstName',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              maxLength: {
                value: 50,
                message: translations.componentMobileOnboardingStepOneFirstNameFieldMaxLengthError,
              },
              validate: {
                startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                  translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                ),
                containSingleWord: containSingleWord(
                  translations.commonFormFieldErrorContainSingleWord,
                ),
              },
            },
          }}
          inputProps={{
            fullWidth: true,
            color: 'secondary',
            autoComplete: 'disabled',
            label: translations.componentMobileOnboardingStepOneFirstNameFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'lastName',
            rules: {
              maxLength: {
                value: 50,
                message: translations.componentMobileOnboardingStepOneLastNameFieldMaxLengthError,
              },
              validate: {
                startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                  translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                ),
                containSingleWord: containSingleWord(
                  translations.commonFormFieldErrorContainSingleWord,
                ),
              },
            },
          }}
          inputProps={{
            fullWidth: true,
            color: 'secondary',
            autoComplete: 'disabled',
            label: translations.componentMobileOnboardingStepOneLastNameFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
