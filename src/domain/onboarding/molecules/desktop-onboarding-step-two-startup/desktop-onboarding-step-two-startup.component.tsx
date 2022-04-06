import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import { DesktopOnboardingLayout } from '../../atoms';
import { IDesktopOnboardingStartupData } from '../../onboarding.types';
import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepTwoStartupProps } from './desktop-onboarding-step-two-startup.types';

export const DesktopOnboardingStepTwoStartup = ({
  focusMarkets,
  industrialSectors,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IDesktopOnboardingStepTwoStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStartupData>({
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
  const mapStartupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(startupSectors);
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(industrialSectors);
  const startupProfileCreatorTypesDropdownOptions = mapStartupProfileCreatorTypesToDropdownOptions(
    startupProfileCreatorTypes,
  );

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingLayout heading="Setup Startup">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '700px',
          margin: '0 auto',
        }}
        onSubmit={onSubmit}
      >
        <Grid container columnSpacing={4} rowSpacing={3}>
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
                labelId:
                  'desktop-onboarding-step-two-startup-startup-profile-creator-type-id-select',
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
                labelId: 'desktop-onboarding-step-two-startup-team-size-id-select',
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
                labelId: 'desktop-onboarding-step-two-startup-focus-market-ids-select',
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
                options: mapStartupSectorsDropdownOptions,
                labelId: 'desktop-onboarding-step-two-startup-startup-sector-ids-select',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteWithController
              autocompleteProps={{
                multiple: true,
                fullWidth: true,
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
          <Grid item xs={3}>
            <Button fullWidth size="large" variant="outlined">
              Back
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth size="large" type="submit" variant="contained">
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </DesktopOnboardingLayout>
  );
};
