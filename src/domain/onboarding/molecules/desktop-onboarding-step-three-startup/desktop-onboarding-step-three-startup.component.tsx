import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
} from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepThreeStartupData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepThreeStartupFormData,
  translationStrings,
} from './desktop-onboarding-step-three-startup.defaults';
import { IDesktopOnboardingStepThreeStartupProps } from './desktop-onboarding-step-three-startup.types';

export const DesktopOnboardingStepThreeStartup = ({
  focusMarkets,
  industrialSectors,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
  onBackButtonClick,
  onContinueButtonClick,
  defaultValues = defaultDesktopOnboardingStepThreeStartupFormData,
}: IDesktopOnboardingStepThreeStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepThreeStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const startupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(
    startupSectors,
    translations,
  );
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(
    industrialSectors,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);
  const startupProfileCreatorTypesDropdownOptions = mapStartupProfileCreatorTypesToDropdownOptions(
    startupProfileCreatorTypes,
    translations,
  );

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepThreeStartupHeading}
      subHeading={translations.componentDesktopOnboardingStepThreeStartupSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
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
            label: translations.componentDesktopOnboardingStepThreeStartupYourPositionFieldLabel,
            labelId: 'desktop-onboarding-step-three-startup-startup-profile-creator-type-id-select',
          }}
        />
      </Grid>
      <Grid item xs={6}>
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
            labelId: 'desktop-onboarding-step-three-startup-team-size-id-select',
            label: translations.componentDesktopOnboardingStepThreeStartupTeamSizeFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={6}>
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
            labelId: 'desktop-onboarding-step-three-startup-focus-market-ids-select',
            label: translations.componentDesktopOnboardingStepThreeStartupFocusMarketFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'startupSectorIds',
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
            options: startupSectorsDropdownOptions,
            labelId: 'desktop-onboarding-step-three-startup-startup-sector-ids-select',
            label: translations.componentDesktopOnboardingStepThreeStartupSectorFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <AutocompleteWithController
          autocompleteProps={{
            limit: 5,
            multiple: true,
            fullWidth: true,
            disableCloseOnSelect: true,
            options: industrialSectorsDropdownOptions,
          }}
          controllerProps={{
            control,
            name: 'industrialSectorIds',
            rules: {
              required: {
                value: true,
                message: translations.commonFormFieldErrorRequired,
              },
            },
          }}
          inputProps={{
            label:
              translations.componentDesktopOnboardingStepThreeStartupIndustrialSectorsFieldLabel,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
