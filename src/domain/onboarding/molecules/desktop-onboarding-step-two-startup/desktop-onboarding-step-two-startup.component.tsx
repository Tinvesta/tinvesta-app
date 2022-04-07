import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AutocompleteWithController, SelectWithController, TextFieldWithController } from '@ui';

import { DesktopOnboardingLayout } from '../../atoms';
import { IDesktopOnboardingStartupData } from '../../onboarding.types';
import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypestoDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
} from '../../utils';
import { IDesktopOnboardingStepTwoStartupProps } from './desktop-onboarding-step-two-startup.types';

export const DesktopOnboardingStepTwoStartup = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IDesktopOnboardingStepTwoStartupProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStartupData>({
    defaultValues: {
      teamSizeId: '',
      startupClaim: '',
      focusMarketIds: [],
      visionStatement: '',
      missionStatement: '',
      startupSectorIds: [],
      investmentSizeIds: [],
      industrialSectorIds: [],
      whatYouAreLookingFor: '',
      investmentStageTypeIds: [],
      startupProfileCreatorTypeId: '',
    },
  });

  const investmentStageTypesDropdownOptions =
    mapInvestmentStageTypestoDropdownOptions(investmentStageTypes);
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(investmentSizes);
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
                label: 'Investment stage type',
                options: investmentStageTypesDropdownOptions,
                labelId: 'desktop-onboarding-step-two-startup-investment-stage-type-ids-select',
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
                label: 'How much money do I need?',
                options: investmentSizesDropdownOptions,
                labelId: 'desktop-onboarding-step-two-startup-investment-size-ids-select',
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
                label: 'What are you looking for?',
                placeholder: 'Describe one sentence what you are looking for on Tinvesta.',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'missionStatement',
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                rows: 3,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: 'What is your mission statement?',
                placeholder: '"Tinvesta builds an efficient and scalable matchmaking service."',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'startupClaim',
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                rows: 3,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: 'What is your startup claim?',
                placeholder:
                  '"Tinvesta enables startups and investors to find each other in the easiest way!"',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'visionStatement',
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                rows: 3,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: 'What is your vision statement?',
                placeholder:
                  '"We will be the leading provider of simple matchmaking services to startups and investors worldwide."',
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
