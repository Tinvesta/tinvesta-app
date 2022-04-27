import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import {
  mapIndustrialSectorsToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
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
  defaultValues = defaultMobileOnboardingStepSixStartupFormData,
  onContinueButtonClick,
  startupSectors,
}: IMobileOnboardingStepSixStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepSixStartupData>({
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

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <MobileOnboardingFormLayout
      continueButtonText={translations.commonButtonsContinue}
      currentStep={6}
      heading={translations.componentMobileOnboardingStepSixStartupHeading}
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
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
            labelId: 'mobile-onboarding-step-six-startup-startup-sector-ids-select',
            label: translations.componentMobileOnboardingStepSixStartupSectorsFieldLabel,
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
