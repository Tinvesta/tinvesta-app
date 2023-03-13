import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import {
  mapIndustrialSectorsToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  useTranslation,
} from '@utils';

import { INDUSTRIAL_SECTORS_LIMIT } from '@constants';

import { MobileOnboardingFormLayout } from '../../atoms';
import { IMobileOnboardingStepSixStartupData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepSixStartupFormData,
  translationStrings,
} from './mobile-onboarding-step-six-startup.defaults';
import { IMobileOnboardingStepSixStartupProps } from './mobile-onboarding-step-six-startup.types';

export const MobileOnboardingStepSixStartup = ({
  defaultValues = defaultMobileOnboardingStepSixStartupFormData,
  industrialSectors,
  onBackButtonClick,
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
      onBackButtonClick={onBackButtonClick}
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
            color: 'secondary',
            options: startupSectorsDropdownOptions,
            labelId: 'mobile-onboarding-step-six-startup-startup-sector-ids-select',
            label: translations.componentMobileOnboardingStepSixStartupSectorsFieldLabel,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <AutocompleteWithController
          autocompleteProps={{
            multiple: true,
            fullWidth: true,
            disableCloseOnSelect: true,
            limit: INDUSTRIAL_SECTORS_LIMIT,
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
            color: 'secondary',
            label: translations.componentMobileOnboardingStepSixStartupIndustrialSectorsFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
