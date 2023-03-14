import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  useTranslation,
} from '@utils';

import { INDUSTRIAL_SECTORS_LIMIT } from '@constants';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepThreeInvestorData } from '../../onboarding.types';
import {
  defaultDesktopOnboardingStepThreeInvestorFormData,
  translationStrings,
} from './desktop-onboarding-step-three-investor.defaults';
import { IDesktopOnboardingStepThreeInvestorProps } from './desktop-onboarding-step-three-investor.types';

export const DesktopOnboardingStepThreeInvestor = ({
  defaultValues = defaultDesktopOnboardingStepThreeInvestorFormData,
  focusMarkets,
  industrialSectors,
  investorProfileTypes,
  onBackButtonClick,
  onContinueButtonClick,
  startupSectors,
}: IDesktopOnboardingStepThreeInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepThreeInvestorData>({
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
  const investorProfileTypesDropdownOptions = mapInvestorProfileTypesToDropdownOptions(
    investorProfileTypes,
    translations,
  );
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout
      backButtonText={translations.commonButtonsBack}
      continueButtonText={translations.commonButtonsContinue}
      heading={translations.componentDesktopOnboardingStepThreeInvestorHeading}
      subHeading={translations.componentDesktopOnboardingStepThreeInvestorSubheading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investorProfileTypeId',
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
            options: investorProfileTypesDropdownOptions,
            labelId: 'desktop-onboarding-step-three-investor-investor-profile-type-id-select',
            label: translations.componentDesktopOnboardingStepThreeInvestorYourPositionFieldLabel,
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
            color: 'secondary',
            options: focusMarketsDropdownOptions,
            labelId: 'desktop-onboarding-step-three-investor-focus-market-ids-select',
            label: translations.componentDesktopOnboardingStepThreeInvestorFocusMarketFieldLabel,
          }}
        />
      </Grid>
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
            labelId: 'desktop-onboarding-step-three-investor-startup-sector-ids-select',
            label: translations.componentDesktopOnboardingStepThreeInvestorStartupSectorFieldLabel,
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
            label:
              translations.componentDesktopOnboardingStepThreeInvestorIndustrialSectorsFieldLabel,
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
