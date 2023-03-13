import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { containEntersOrSpaces, startsOrEndsWithWhitespace, useTranslation } from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFiveStartupData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepFiveStartupFormData,
  translationStrings,
} from './desktop-onboarding-step-five-startup.defaults';
import { IDesktopOnboardingStepFiveStartupProps } from './desktop-onboarding-step-five-startup.types';

export const DesktopOnboardingStepFiveStartup = ({
  defaultValues = defaultDesktopOnboardingStepFiveStartupFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepFiveStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFiveStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepFiveStartupHeading}
      subHeading={translations.componentDesktopOnboardingStepFiveStartupSubheading}
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
                  translations.componentDesktopOnboardingStepFiveStartupMissionStatementFieldMaxLengthError,
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
            rows: 4,
            fullWidth: true,
            multiline: true,
            color: 'secondary',
            autoComplete: 'disabled',
            label: translations.componentDesktopOnboardingStepFiveStartupMissionStatementFieldLabel,
            placeholder:
              // eslint-disable-next-line max-len
              translations.componentDesktopOnboardingStepFiveStartupMissionStatementFieldPlaceholder,
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
                  translations.componentDesktopOnboardingStepFiveStartupVisionStatementFieldMaxLengthError,
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
            rows: 4,
            fullWidth: true,
            multiline: true,
            color: 'secondary',
            autoComplete: 'disabled',
            label: translations.componentDesktopOnboardingStepFiveStartupVisionStatementFieldLabel,
            placeholder:
              translations.componentDesktopOnboardingStepFiveStartupVisionStatementFieldPlaceholder,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
