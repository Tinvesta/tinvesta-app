import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import { DesktopOnboardingLayout } from '../../atoms';
import { IDesktopOnboardingInvestorData } from '../../onboarding.types';
import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepTwoInvestorProps } from './desktop-onboarding-step-two-investor.types';

export const DesktopOnboardingStepTwoInvestor = ({
  focusMarkets,
  industrialSectors,
  investorProfileTypes,
  startupSectors,
  teamSizes,
}: IDesktopOnboardingStepTwoInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingInvestorData>({
    defaultValues: {
      teamSizeIds: [],
      focusMarketIds: [],
      startupSectorIds: [],
      industrialSectorIds: [],
      investorProfileTypeId: '',
    },
  });

  const investorProfileTypesDropdownOptions =
    mapInvestorProfileTypesToDropdownOptions(investorProfileTypes);
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets);
  const startupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(startupSectors);
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(industrialSectors);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingLayout heading="Setup Investor">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '800px',
          margin: '0 auto',
        }}
        onSubmit={onSubmit}
      >
        <Grid container columnSpacing={4} rowSpacing={3}>
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
                fullWidth: true,
                label: 'Preferred Startup Sector',
                options: startupSectorsDropdownOptions,
                labelId: 'desktop-onboarding-step-two-investor-startup-sector-ids-select',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'teamSizeIds',
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
                label: 'Preferred Team Size',
                options: teamSizesDropdownOptions,
                labelId: 'desktop-onboarding-step-two-startup-team-size-id-select',
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
