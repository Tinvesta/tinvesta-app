import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import {
  containEntersOrSpaces,
  mapClientTypesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { EMAIL_UNIVERSAL_REGEX } from '@constants';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepTwoData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepTwoFormData,
  translationStrings,
} from './mobile-onboarding-step-two.defaults';
import { IMobileOnboardingStepTwoProps } from './mobile-onboarding-step-two.types';

export const MobileOnboardingStepTwo = ({
  clientTypes,
  defaultValues = defaultMobileOnboardingStepTwoFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IMobileOnboardingStepTwoProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepTwoData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const clientTypesDropdownOptions = mapClientTypesToDropdownOptions(clientTypes, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={2}
      heading={translations.componentMobileOnboardingStepTwoHeading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'clientTypeId',
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
            options: clientTypesDropdownOptions,
            labelId: 'mobile-onboarding-step-two-client-type-id-select',
            label: translations.componentMobileOnboardingStepTwoProfileTypeFieldLabel,
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
            color: 'secondary',
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
            color: 'secondary',
            autoComplete: 'disabled',
            label: translations.componentMobileOnboardingStepTwoCompanyNameFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
