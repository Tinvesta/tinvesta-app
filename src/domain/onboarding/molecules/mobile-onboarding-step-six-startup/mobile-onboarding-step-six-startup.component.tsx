import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import {
  mapIndustrialSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
} from '@utils';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepSixStartupData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepSixStartupFormData,
  translationStrings,
} from './mobile-onboarding-step-six-startup.defaults';
import { IMobileOnboardingStepSixStartupProps } from './mobile-onboarding-step-six-startup.types';

export const MobileOnboardingStepSixStartup = ({
  industrialSectors,
  teamSizes,
  defaultValues = defaultMobileOnboardingStepSixStartupFormData,
  onContinueButtonClick,
}: IMobileOnboardingStepSixStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepSixStartupData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(
    industrialSectors,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentMobileOnboardingStepSixStartupHeading}
      subHeading={translations.componentMobileOnboardingStepSixStartupSubheading}
      onSubmit={onSubmit}
    >
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
            labelId: 'mobile-onboarding-step-six-startup-team-size-id-select',
            label: translations.componentMobileOnboardingStepSixStartupTeamSizeFieldLabel,
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
            label: translations.componentMobileOnboardingStepSixStartupIndustrialSectorsFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
