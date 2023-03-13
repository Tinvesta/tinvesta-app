import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { containEntersOrSpaces, startsOrEndsWithWhitespace, useTranslation } from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepNineStartupData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepNineStartupFormData,
  translationStrings,
} from './mobile-onboarding-step-nine-startup.defaults';
import { IMobileOnboardingStepNineStartupProps } from './mobile-onboarding-step-nine-startup.types';

export const MobileOnboardingStepNineStartup = ({
  defaultValues = defaultMobileOnboardingStepNineStartupFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepNineStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepNineStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={9}
      heading={translations.componentMobileOnboardingStepNineStartupHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'missionStatement',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              maxLength: {
                value: 160,
                message:
                  // eslint-disable-next-line max-len
                  translations.componentMobileOnboardingStepNineStartupMissionStatementFieldMaxLengthError,
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
            label: translations.componentMobileOnboardingStepNineStartupMissionStatementFieldLabel,
            placeholder:
              // eslint-disable-next-line max-len
              translations.componentMobileOnboardingStepNineStartupMissionStatementFieldPlaceholder,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'visionStatement',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              maxLength: {
                value: 160,
                message:
                  // eslint-disable-next-line max-len
                  translations.componentMobileOnboardingStepNineStartupVisionStatementFieldMaxLengthError,
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
            label: translations.componentMobileOnboardingStepNineStartupVisionStatementFieldLabel,
            placeholder:
              translations.componentMobileOnboardingStepNineStartupVisionStatementFieldPlaceholder,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
