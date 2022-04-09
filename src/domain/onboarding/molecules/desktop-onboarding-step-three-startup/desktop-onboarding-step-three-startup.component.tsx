import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepThreeStartupData } from '../../onboarding.types';
import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepThreeStartupProps } from './desktop-onboarding-step-three-startup.types';

export const DesktopOnboardingStepThreeStartup = ({
  focusMarkets,
  industrialSectors,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IDesktopOnboardingStepThreeStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepThreeStartupData>({
    defaultValues: {
      teamSizeId: '',
      focusMarketIds: [],
      startupSectorIds: [],
      industrialSectorIds: [],
      startupProfileCreatorTypeId: '',
    },
  });

  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets);
  const startupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(startupSectors);
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(industrialSectors);
  const startupProfileCreatorTypesDropdownOptions = mapStartupProfileCreatorTypesToDropdownOptions(
    startupProfileCreatorTypes,
  );

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout
      backButtonText="Back"
      continueButtonText="Continue"
      heading="Setup Startup"
      subHeading="Step 3/5"
      onSubmit={onSubmit}
    >
      <Grid item xs={6}>
        <SelectWithController
          controllerProps={{
            control,
            name: 'startupProfileCreatorTypeId',
            rules: {
              required: true,
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            fullWidth: true,
            label: 'Your Position',
            options: startupProfileCreatorTypesDropdownOptions,
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
              required: true,
            },
          }}
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            fullWidth: true,
            label: 'Team Size',
            options: teamSizesDropdownOptions,
            labelId: 'desktop-onboarding-step-three-startup-team-size-id-select',
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
            label: 'Focus Market',
            options: focusMarketsDropdownOptions,
            labelId: 'desktop-onboarding-step-three-startup-focus-market-ids-select',
          }}
        />
      </Grid>
      <Grid item xs={6}>
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
            label: 'Sector',
            fullWidth: true,
            options: startupSectorsDropdownOptions,
            labelId: 'desktop-onboarding-step-three-startup-startup-sector-ids-select',
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
