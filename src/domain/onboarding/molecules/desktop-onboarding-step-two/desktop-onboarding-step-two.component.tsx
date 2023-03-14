import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController, UploadImagesWithController } from '@ui';

import {
  containEntersOrSpaces,
  formArrayMinLength,
  mapClientTypesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepTwoFormData,
  translationStrings,
} from './desktop-onboarding-step-two.defaults';
import { IDesktopOnboardingStepTwoProps } from './desktop-onboarding-step-two.types';

export const DesktopOnboardingStepTwo = ({
  clientTypes,
  defaultValues = defaultDesktopOnboardingStepTwoFormData,
  onBackButtonClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepTwoProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepTwoData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const clientTypesDropdownOptions = mapClientTypesToDropdownOptions(clientTypes, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepTwoHeading}
      subHeading={translations.componentDesktopOnboardingStepTwoSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={5}>
        <UploadImagesWithController
          controllerProps={{
            control,
            name: 'images',
            rules: {
              validate: {
                formArrayMinLength: formArrayMinLength(
                  1,
                  translations.componentDesktopOnboardingStepTwoImagesFieldMinLengthError,
                ),
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={7}>
        <Grid container flexDirection="column" justifyContent="center" rowSpacing={3}>
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
                labelId: 'desktop-onboarding-step-two-client-type-id-select',
                label: translations.componentDesktopOnboardingStepTwoProfileTypeFieldLabel,
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
                      translations.componentDesktopOnboardingStepTwoWhatAreYouLookingForFieldMaxLengthError,
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
                rows: 10,
                fullWidth: true,
                multiline: true,
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDesktopOnboardingStepTwoWhatAreYouLookingForFieldLabel,
                placeholder:
                  // eslint-disable-next-line max-len
                  translations.componentDesktopOnboardingStepTwoWhatAreYouLookingForFieldPlaceholder,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
