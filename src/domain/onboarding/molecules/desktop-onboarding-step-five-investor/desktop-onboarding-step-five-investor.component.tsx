import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, TextFieldWithController } from '@ui';

import {
  containEntersOrSpaces,
  mapInvestorDemandTypesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepFiveInvestorData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepFiveInvestorFormData,
  translationStrings,
} from './desktop-onboarding-step-five-investor.defaults';
import { IDesktopOnboardingStepFiveInvestorProps } from './desktop-onboarding-step-five-investor.types';

export const DesktopOnboardingStepFiveInvestor = ({
  defaultValues = defaultDesktopOnboardingStepFiveInvestorFormData,
  investorDemandTypes,
  onBackButtonClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepFiveInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepFiveInvestorData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investorDemandTypesDropdownOptions = mapInvestorDemandTypesToDropdownOptions(
    investorDemandTypes,
    translations,
  );

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepFiveInvestorHeading}
      subHeading={translations.componentDesktopOnboardingStepFiveInvestorSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investorDemandTypeIds',
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
            options: investorDemandTypesDropdownOptions,
            label: translations.componentDesktopOnboardingStepFiveInvestorDemandFieldLabel,
            labelId: 'desktop-onboarding-step-five-investor-investor-demand-type-ids-select',
          }}
        />
      </Grid>
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
                  translations.componentDesktopOnboardingStepFiveInvestorWhyStartupShouldMatchWithYouFieldMaxLengthError,
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
              translations.componentDesktopOnboardingStepFiveInvestorWhyStartupShouldMatchWithYouFieldLabel,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
