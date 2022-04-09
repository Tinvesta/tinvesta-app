import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { SelectWithController, UploadImageWithPreviewWithController } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import { IDesktopOnboardingStepTwoData } from '../../onboarding.types';
import { mapClientTypesToDropdownOptions } from '../../utils';
import { IDesktopOnboardingStepTwoProps } from './desktop-onboarding-step-two.types';

export const DesktopOnboardingStepTwo = ({
  clientTypes,
  onBackClick,
  onContinueButtonClick,
}: IDesktopOnboardingStepTwoProps): JSX.Element => {
  const { control, handleSubmit } = useForm<IDesktopOnboardingStepTwoData>({
    defaultValues: {
      clientTypeId: '',
      representativeImage: '',
    },
  });

  const clientTypesDropdownOptions = mapClientTypesToDropdownOptions(clientTypes);

  const onSubmit = handleSubmit(onContinueButtonClick);

  return (
    <DesktopOnboardingFormLayout heading="General" subHeading="Step 2/2" onSubmit={onSubmit}>
      <Grid container columnSpacing={4} display="flex" justifyContent="center" rowSpacing={3}>
        <Grid item xs={12}>
          <UploadImageWithPreviewWithController
            controllerProps={{
              control,
              name: 'representativeImage',
              rules: {
                required: true,
              },
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectWithController
            controllerProps={{
              control,
              name: 'clientTypeId',
              rules: {
                required: true,
              },
            }}
            formControlProps={{
              fullWidth: true,
            }}
            selectProps={{
              fullWidth: true,
              label: 'Profile Type',
              options: clientTypesDropdownOptions,
              labelId: 'desktop-onboarding-step-two-client-type-id-select',
            }}
          />
        </Grid>
        <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
          <Grid item xs={3}>
            <Button fullWidth size="large" variant="outlined" onClick={onBackClick}>
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
