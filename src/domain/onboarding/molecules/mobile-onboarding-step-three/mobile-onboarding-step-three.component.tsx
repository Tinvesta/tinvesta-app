import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { LocationAutocompleteWithController, TextFieldWithController } from '@ui';

import { containEntersOrSpaces, startsOrEndsWithWhitespace, useTranslation } from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepThreeData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepThreeFormData,
  translationStrings,
} from './mobile-onboarding-step-three.defaults';
import { IMobileOnboardingStepThreeProps } from './mobile-onboarding-step-three.types';

export const MobileOnboardingStepThree = ({
  defaultValues = defaultMobileOnboardingStepThreeFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepThreeProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepThreeData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={3}
      heading={translations.componentMobileOnboardingStepThreeHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
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
            color: 'secondary',
            label: translations.componentMobileOnboardingStepThreeLocationFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldWithController
          controllerProps={{
            control,
            name: 'whatAreYouLookingFor',
            rules: {
              maxLength: {
                value: 160,
                message:
                  // eslint-disable-next-line max-len
                  translations.componentMobileOnboardingStepThreeWhatAreYouLookingForFieldMaxLengthError,
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
            label: translations.componentMobileOnboardingStepThreeWhatAreYouLookingForFieldLabel,
            placeholder:
              // eslint-disable-next-line max-len
              translations.componentMobileOnboardingStepThreeWhatAreYouLookingForFieldPlaceholder,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
