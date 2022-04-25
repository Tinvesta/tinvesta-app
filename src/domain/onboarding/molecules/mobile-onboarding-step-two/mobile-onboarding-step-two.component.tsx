import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { containEntersOrSpaces, startsOrEndsWithWhitespace, useTranslation } from '@utils';

import { EMAIL_UNIVERSAL_REGEX } from '@constants';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepTwoData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepTwoFormData,
  translationStrings,
} from './mobile-onboarding-step-two.defaults';
import { IMobileOnboardingStepTwoProps } from './mobile-onboarding-step-two.types';

export const MobileOnboardingStepTwo = ({
  defaultValues = defaultMobileOnboardingStepTwoFormData,
  onContinueButtonClick,
}: IMobileOnboardingStepTwoProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepTwoData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentMobileOnboardingStepTwoHeading}
      subHeading={translations.componentMobileOnboardingStepTwoSubheading}
      onSubmit={onSubmit}
    >
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
                  translations.componentMobileOnboardingStepTwoContactEmailFieldPatternMatchError,
              },
              maxLength: {
                value: 100,
                message:
                  translations.componentMobileOnboardingStepTwoContactEmailFieldMaxLengthError,
              },
            },
          }}
          inputProps={{
            fullWidth: true,
            autoComplete: 'disabled',
            label: translations.componentMobileOnboardingStepTwoContactEmailFieldLabel,
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
                  translations.componentMobileOnboardingStepTwoCompanyNameFieldMaxLengthError,
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
            label: translations.componentMobileOnboardingStepTwoCompanyNameFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
