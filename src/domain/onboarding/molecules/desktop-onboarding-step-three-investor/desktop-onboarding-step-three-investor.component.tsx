import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  useTranslation,
} from '@utils';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepThreeInvestorData } from '../../onboarding.types';
import { mapInvestorProfileTypesToDropdownOptions } from '../../utils';
import {
  defaultDesktopOnboardingStepThreeInvestorFormData,
  translationStrings,
} from './desktop-onboarding-step-three-investor.defaults';
import { IDesktopOnboardingStepThreeInvestorProps } from './desktop-onboarding-step-three-investor.types';

export const DesktopOnboardingStepThreeInvestor = ({
  focusMarkets,
  industrialSectors,
  investorProfileTypes,
  startupSectors,
  onBackButtonClick,
  onContinueButtonClick,
  defaultValues = defaultDesktopOnboardingStepThreeInvestorFormData,
}: IDesktopOnboardingStepThreeInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepThreeInvestorData>({
    defaultValues,
  });

  const translations = useTranslation(translationStrings);
  const investorProfileTypesDropdownOptions =
    mapInvestorProfileTypesToDropdownOptions(investorProfileTypes);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);
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
    <DesktopOnboardingFormLayout
      backButtonText="Back"
      continueButtonText="Continue"
      heading="Setup Investor"
      subHeading="Step 3/5"
      onBackButtonClick={onBackButtonClick}
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'investorProfileTypeId',
            rules: {
              required: true,
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            fullWidth: true,
            label: 'Investor Profile Type',
            options: investorProfileTypesDropdownOptions,
            labelId: 'desktop-onboarding-step-two-investor-investor-profile-type-id-select',
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'focusMarketIds',
            rules: {
              required: true,
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            multiple: true,
            fullWidth: true,
            label: 'Investment Focus',
            options: focusMarketsDropdownOptions,
            labelId: 'desktop-onboarding-step-two-investor-focus-market-ids-select',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'startupSectorIds',
            rules: {
              required: true,
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            multiple: true,
            fullWidth: true,
            label: 'Preferred Startup Sector',
            options: startupSectorsDropdownOptions,
            labelId: 'desktop-onboarding-step-two-investor-startup-sector-ids-select',
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
              required: true,
            },
          }}
          inputProps={{
            label: 'Industrial Sector',
          }}
        />
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
