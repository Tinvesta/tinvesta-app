import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingLayout } from '../../atoms';
import { IDesktopOnboardingInvestorData } from '../../onboarding.types';
import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypestoDropdownOptions,
  mapInvestorDemandTypesToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepTwoInvestorProps } from './desktop-onboarding-step-two-investor.types';

export const DesktopOnboardingStepTwoInvestor = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  startupSectors,
  teamSizes,
}: IDesktopOnboardingStepTwoInvestorProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingInvestorData>({
    defaultValues: {
      teamSizeIds: [],
      focusMarketIds: [],
      startupSectorIds: [],
      investmentSizeIds: [],
      industrialSectorIds: [],
      whatYouAreLookingFor: '',
      investorDemandTypeIds: [],
      investorProfileTypeId: '',
      investmentStageTypeIds: [],
    },
  });

  const investorDemandTypesDropdownOptions =
    mapInvestorDemandTypesToDropdownOptions(investorDemandTypes);
  const investorProfileTypesDropdownOptions =
    mapInvestorProfileTypesToDropdownOptions(investorProfileTypes);
  const investmentStageTypesDropdownOptions =
    mapInvestmentStageTypestoDropdownOptions(investmentStageTypes);
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets);
  const startupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(startupSectors);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(investmentSizes);
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
                labelId: 'desktop-onboarding-step-two-investor-team-size-id-select',
              }}
            />
          </Grid>
          <Grid item maxHeight={80} xs={6}>
            <AutocompleteWithController
              autocompleteProps={{
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
          <Grid item xs={6}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investmentStageTypeIds',
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
                label: 'Preferred Investment Stage',
                options: investmentStageTypesDropdownOptions,
                labelId: 'desktop-onboarding-step-two-investor-investment-stage-type-ids-select',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investmentSizeIds',
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
                options: investmentSizesDropdownOptions,
                label: "How much money you'd like to give?",
                labelId: 'desktop-onboarding-step-two-investor-investment-size-ids-select',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investorDemandTypeIds',
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
                label: 'Demand',
                options: investorDemandTypesDropdownOptions,
                labelId: 'desktop-onboarding-step-two-investor-investor-demand-type-ids-select',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'whatYouAreLookingFor',
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                rows: 3,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: 'Why should a startup match with you?',
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
