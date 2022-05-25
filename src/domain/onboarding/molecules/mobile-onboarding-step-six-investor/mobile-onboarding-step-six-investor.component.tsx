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
import { IMobileOnboardingStepSixInvestorData } from '../../onboarding.types';
import {
  defaultMobileOnboardingStepSixInvestorFormData,
  translationStrings,
} from './mobile-onboarding-step-six-investor.defaults';
import { IMobileOnboardingStepSixInvestorProps } from './mobile-onboarding-step-six-investor.types';

export const MobileOnboardingStepSixInvestor = ({
  industrialSectors,
  defaultValues = defaultMobileOnboardingStepSixInvestorFormData,
  onContinueButtonClick,
  onBackButtonClick,
  startupSectors,
}: IMobileOnboardingStepSixInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IMobileOnboardingStepSixInvestorData>({
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
      heading={translations.componentMobileOnboardingStepSixInvestorHeading}
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
            options: startupSectorsDropdownOptions,
            labelId: 'mobile-onboarding-step-six-investor-startup-sector-ids-select',
            label: translations.componentMobileOnboardingStepSixInvestorSectorsFieldLabel,
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
            label: translations.componentMobileOnboardingStepSixInvestorIndustrialSectorsFieldLabel,
          }}
        />
      </Grid>
    </MobileOnboardingFormLayout>
  );
};
