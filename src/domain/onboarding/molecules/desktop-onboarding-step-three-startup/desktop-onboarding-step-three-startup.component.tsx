import { Button, Grid } from '@mui/material';
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
    <DesktopOnboardingFormLayout heading="Setup Startup" subHeading="Step 3/4" onSubmit={onSubmit}>
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
              labelId: 'desktop-onboarding-step-two-startup-startup-profile-creator-type-id-select',
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
              options: startupSectorsDropdownOptions,
              labelId: 'desktop-onboarding-step-two-startup-startup-sector-ids-select',
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
        {/* <Grid item xs={6}>
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
                '"We will be the leading provider of simple matchmaking
                services to startups and investors worldwide."',
            }}
          />
        </Grid> */}
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
