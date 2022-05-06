import { LoadingButton } from '@mui/lab';
import { Button, Grid } from '@mui/material';
import { memo } from 'react';

import {
  AutocompleteWithController,
  CenterBlockLayout,
  LocationAutocompleteWithController,
  SelectWithController,
  TextFieldWithController,
  UploadImagesWithController,
} from '@ui';

import {
  containEntersOrSpaces,
  containSingleWord,
  formArrayMinLength,
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useDeviceDetect,
  useTranslation,
} from '@utils';

import { EMAIL_UNIVERSAL_REGEX } from '@constants';

import { translationStrings } from './startup-edit-profile-form.defaults';
import S from './startup-edit-profile-form.styles';
import { IStartupEditProfileFormProps } from './startup-edit-profile-form.types';

const StartupEditProfileFormComponent = ({
  control,
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  isDirty,
  isLoading,
  onResetButtonClick,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
  ...formProps
}: IStartupEditProfileFormProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const translations = useTranslation(translationStrings);
  const startupSectorsDropdownOptions = mapStartupSectorsToDropdownOptions(
    startupSectors,
    translations,
  );
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(
    investmentSizes,
    translations,
  );
  const industrialSectorsDropdownOptions = mapIndustrialSectorsToDropdownOptions(
    industrialSectors,
    translations,
  );
  const investmentStageTypesDropdownOptions = mapInvestmentStageTypesToDropdownOptions(
    investmentStageTypes,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);
  const startupProfileCreatorTypesDropdownOptions = mapStartupProfileCreatorTypesToDropdownOptions(
    startupProfileCreatorTypes,
    translations,
  );

  const desktopHalfInputsWidthXS = deviceData.isSmallerThanMD ? 12 : 6;

  return (
    <CenterBlockLayout>
      <S.StyledWrapper {...formProps}>
        <Grid container columnSpacing={4} rowSpacing={deviceData.isSmallerThanMD ? 1 : 3}>
          <Grid item xs={12}>
            <UploadImagesWithController
              controllerProps={{
                control,
                name: 'images',
                rules: {
                  validate: {
                    formArrayMinLength: formArrayMinLength(
                      1,
                      translations.componentDashboardEditProfileFormImagesFieldMinLengthError,
                    ),
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'firstName',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 50,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormFirstNameFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containSingleWord: containSingleWord(
                      translations.commonFormFieldErrorContainSingleWord,
                    ),
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormFirstNameFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'lastName',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 50,
                    message:
                      translations.componentDashboardEditProfileFormLastNameFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containSingleWord: containSingleWord(
                      translations.commonFormFieldErrorContainSingleWord,
                    ),
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormLastNameFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'contactEmail',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  pattern: {
                    value: EMAIL_UNIVERSAL_REGEX,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormContactEmailFieldPatternMatchError,
                  },
                  maxLength: {
                    value: 100,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormContactEmailFieldMaxLengthError,
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormContactEmailFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'companyName',
                rules: {
                  maxLength: {
                    value: 100,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormCompanyNameFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containEntersOrSpaces: containEntersOrSpaces(
                      translations.commonFormFieldErrorContainEntersOrSpaces,
                    ),
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormCompanyNameFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <LocationAutocompleteWithController
              controllerProps={{
                control,
                name: 'location',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                },
              }}
              inputProps={{
                label: translations.componentDashboardEditProfileFormLocationFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'startupProfileCreatorTypeId',
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
                options: startupProfileCreatorTypesDropdownOptions,
                label: translations.componentDashboardEditProfileFormYourPositionFieldLabel,
                labelId:
                  'desktop-onboarding-step-three-startup-startup-profile-creator-type-id-select',
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
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
                options: focusMarketsDropdownOptions,
                labelId: 'desktop-onboarding-step-three-investor-focus-market-ids-select',
                label: translations.componentDashboardEditProfileFormFocusMarketFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'teamSizeId',
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
                options: teamSizesDropdownOptions,
                labelId: 'desktop-onboarding-step-three-startup-team-size-id-select',
                label: translations.componentDashboardEditProfileFormTeamSizeFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investmentStageTypeIds',
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
                options: investmentStageTypesDropdownOptions,
                labelId: 'desktop-onboarding-step-four-investor-investment-stage-type-ids-select',
                label: translations.componentDashboardEditProfileFormInvestmentStageFieldLabel,
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
                options: startupSectorsDropdownOptions,
                labelId: 'desktop-onboarding-step-three-investor-startup-sector-ids-select',
                label: translations.componentDashboardEditProfileFormStartupSectorFieldLabel,
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
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                },
              }}
              inputProps={{
                label: translations.componentDashboardEditProfileFormIndustrialSectorsFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investmentSizeIds',
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
                options: investmentSizesDropdownOptions,
                labelId: 'desktop-onboarding-step-four-investor-investment-size-ids-select',
                label: translations.componentDashboardEditProfileFormInvestmentSizeFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'startupClaim',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 160,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormStartupClaimFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containEntersOrSpaces: containEntersOrSpaces(
                      translations.commonFormFieldErrorContainEntersOrSpaces,
                    ),
                  },
                },
              }}
              inputProps={{
                rows: 3,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormStartupClaimFieldLabel,
                placeholder:
                  translations.componentDashboardEditProfileFormStartupClaimFieldPlaceholder,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'missionStatement',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 160,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormMissionStatementFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containEntersOrSpaces: containEntersOrSpaces(
                      translations.commonFormFieldErrorContainEntersOrSpaces,
                    ),
                  },
                },
              }}
              inputProps={{
                rows: 3,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormMissionStatementFieldLabel,
                placeholder:
                  // eslint-disable-next-line max-len
                  translations.componentDashboardEditProfileFormMissionStatementFieldPlaceholder,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'visionStatement',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 160,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardEditProfileFormVisionStatementFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containEntersOrSpaces: containEntersOrSpaces(
                      translations.commonFormFieldErrorContainEntersOrSpaces,
                    ),
                  },
                },
              }}
              inputProps={{
                rows: 4,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardEditProfileFormVisionStatementFieldLabel,
                placeholder:
                  translations.componentDashboardEditProfileFormVisionStatementFieldPlaceholder,
              }}
            />
          </Grid>
          <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
            <Grid item xs={deviceData.isSmallerThanSM ? 6 : 3}>
              <Button
                fullWidth
                disabled={!isDirty}
                size="large"
                variant="outlined"
                onClick={onResetButtonClick}
              >
                {translations.commonButtonsReset}
              </Button>
            </Grid>
            <Grid item xs={deviceData.isSmallerThanSM ? 6 : 3}>
              <LoadingButton
                fullWidth
                disabled={!isDirty}
                loading={isLoading}
                size="large"
                type="submit"
                variant="contained"
              >
                {translations.commonButtonsSave}
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </S.StyledWrapper>
    </CenterBlockLayout>
  );
};

export const StartupEditProfileForm = memo(StartupEditProfileFormComponent);
