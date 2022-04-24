import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { LocationAutocompleteWithController, TextFieldWithController } from '@ui';

import {
  containEntersOrSpaces,
  containSingleWord,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { EMAIL_UNIVERSAL_REGEX } from '@constants';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepOneData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepOneFormData,
  translationStrings,
} from './desktop-onboarding-step-one.defaults';
import { IDesktopOnboardingStepOneProps } from './desktop-onboarding-step-one.types';

export const DesktopOnboardingStepOne = ({
  defaultValues = defaultDesktopOnboardingStepOneFormData,
  onContinueButtonClick,
}: IDesktopOnboardingStepOneProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepOneData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepOneHeading}
      subHeading={translations.componentDesktopOnboardingStepOneSubheading}
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
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
                message: translations.componentDesktopOnboardingStepOneFirstNameFieldMaxLengthError,
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
            autoComplete: 'disabled',
            label: translations.componentDesktopOnboardingStepOneFirstNameFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'lastName',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              maxLength: {
                value: 50,
                message: translations.componentDesktopOnboardingStepOneLastNameFieldMaxLengthError,
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
            autoComplete: 'disabled',
            label: translations.componentDesktopOnboardingStepOneLastNameFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'contactEmail',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              pattern: {
                value: EMAIL_UNIVERSAL_REGEX,
                message:
                  translations.componentDesktopOnboardingStepOneContactEmailFieldPatternMatchError,
              },
              maxLength: {
                value: 100,
                message:
                  translations.componentDesktopOnboardingStepOneContactEmailFieldMaxLengthError,
              },
            },
          }}
          inputProps={{
            fullWidth: true,
            autoComplete: 'disabled',
            label: translations.componentDesktopOnboardingStepOneContactEmailFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'companyName',
            rules: {
              maxLength: {
                value: 100,
                message:
                  translations.componentDesktopOnboardingStepOneCompanyNameFieldMaxLengthError,
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
            fullWidth: true,
            autoComplete: 'disabled',
            label: translations.componentDesktopOnboardingStepOneCompanyNameFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <LocationAutocompleteWithController
          controllerProps={{
            control,
            name: 'location',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
            },
          }}
          inputProps={{
            label: translations.componentDesktopOnboardingStepOneLocationFieldLabel,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
