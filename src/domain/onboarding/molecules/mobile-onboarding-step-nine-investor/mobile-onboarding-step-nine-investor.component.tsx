import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldWithController } from '@ui';

import { containEntersOrSpaces, startsOrEndsWithWhitespace, useTranslation } from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepNineInvestorData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepNineInvestorFormData,
  translationStrings,
} from './mobile-onboarding-step-nine-investor.defaults';
import { IMobileOnboardingStepNineInvestorProps } from './mobile-onboarding-step-nine-investor.types';

export const MobileOnboardingStepNineInvestor = ({
  defaultValues = defaultMobileOnboardingStepNineInvestorFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepNineInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepNineInvestorData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={9}
      heading={translations.componentMobileOnboardingStepNineInvestorHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'whyStartupShouldMatchWithYou',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
              maxLength: {
                value: 160,
                message:
                  // eslint-disable-next-line max-len
                  translations.componentMobileOnboardingStepNineInvestorWhyStartupShouldMatchWithYouFieldMaxLengthError,
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
            rows: 5,
            fullWidth: true,
            multiline: true,
            color: 'secondary',
            autoComplete: 'disabled',
            label:
              // eslint-disable-next-line max-len
              translations.componentMobileOnboardingStepNineInvestorWhyStartupShouldMatchWithYouFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
