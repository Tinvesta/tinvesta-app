import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepFiveStartupData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepFiveStartupFormData,
  translationStrings,
} from './mobile-onboarding-step-five-startup.defaults';
import { IMobileOnboardingStepFiveStartupProps } from './mobile-onboarding-step-five-startup.types';

export const MobileOnboardingStepFiveStartup = ({
  focusMarkets,
  startupProfileCreatorTypes,
  teamSizes,
  defaultValues = defaultMobileOnboardingStepFiveStartupFormData,
  onContinueButtonClick,
}: IMobileOnboardingStepFiveStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepFiveStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);
  const startupProfileCreatorTypesDropdownOptions = mapStartupProfileCreatorTypesToDropdownOptions(
    startupProfileCreatorTypes,
    translations,
  );

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentMobileOnboardingStepFiveStartupHeading}
      subHeading={translations.componentMobileOnboardingStepFiveStartupSubheading}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'startupProfileCreatorTypeId',
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
            options: startupProfileCreatorTypesDropdownOptions,
            label: translations.componentMobileOnboardingStepFiveStartupYourPositionFieldLabel,
            labelId: 'mobile-onboarding-step-five-startup-startup-profile-creator-type-id-select',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'teamSizeId',
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
            options: teamSizesDropdownOptions,
            labelId: 'mobile-onboarding-step-five-startup-team-size-id-select',
            label: translations.componentMobileOnboardingStepFiveStartupTeamSizeFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'focusMarketIds',
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
            options: focusMarketsDropdownOptions,
            labelId: 'mobile-onboarding-step-five-startup-focus-market-ids-select',
            label: translations.componentMobileOnboardingStepFiveStartupFocusMarketFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
