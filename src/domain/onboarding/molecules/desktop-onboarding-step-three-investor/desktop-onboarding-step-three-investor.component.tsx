import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepThreeInvestorData } from '../../onboarding.types';
import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepThreeInvestorProps } from './desktop-onboarding-step-three-investor.types';

export const DesktopOnboardingStepThreeInvestor = ({
  focusMarkets,
  industrialSectors,
  investorProfileTypes,
  startupSectors,
}: IDesktopOnboardingStepThreeInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepThreeInvestorData>({
    defaultValues: {
      focusMarketIds: [],
      startupSectorIds: [],
      industrialSectorIds: [],
      investorProfileTypeId: '',
    },
  });

  const investorProfileTypesDropdownOptions =
    mapInvestorProfileTypesToDropdownOptions(investorProfileTypes);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets);
  const startupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(startupSectors);
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(industrialSectors);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DesktopOnboardingFormLayout heading="Setup Investor" subHeading="Step 3/5" onSubmit={onSubmit}>
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
        <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
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
      </Grid>
    </DesktopOnboardingFormLayout>
  );
};
