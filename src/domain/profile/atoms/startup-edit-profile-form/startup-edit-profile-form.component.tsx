import { LoadingButton } from '@mui/lab';
import { Button, Grid } from '@mui/material';
import { memo } from 'react';
import { useDeviceDetect } from 'use-device-detect';

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
  useTranslation,
} from '@utils';

import { EMAIL_UNIVERSAL_REGEX, INDUSTRIAL_SECTORS_LIMIT } from '@constants';

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
                      // eslint-disable-next-line max-len
                      translations.componentDashboardStartupEditProfileFormImagesFieldMinLengthError,
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
                      translations.componentDashboardStartupEditProfileFormFirstNameFieldMaxLengthError,
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
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDashboardStartupEditProfileFormFirstNameFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'lastName',
                rules: {
                  maxLength: {
                    value: 50,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardStartupEditProfileFormLastNameFieldMaxLengthError,
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
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDashboardStartupEditProfileFormLastNameFieldLabel,
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
                      translations.componentDashboardStartupEditProfileFormContactEmailFieldPatternMatchError,
                  },
                  maxLength: {
                    value: 100,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardStartupEditProfileFormContactEmailFieldMaxLengthError,
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDashboardStartupEditProfileFormContactEmailFieldLabel,
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
                      translations.componentDashboardStartupEditProfileFormCompanyNameFieldMaxLengthError,
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
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDashboardStartupEditProfileFormCompanyNameFieldLabel,
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
                color: 'secondary',
                label: translations.componentDashboardStartupEditProfileFormLocationFieldLabel,
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
                color: 'secondary',
                options: startupProfileCreatorTypesDropdownOptions,
                label: translations.componentDashboardStartupEditProfileFormYourPositionFieldLabel,
                labelId: 'startup-edit-profile-form-startup-profile-creator-type-id-select',
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
                color: 'secondary',
                options: focusMarketsDropdownOptions,
                labelId: 'startup-edit-profile-form-focus-market-ids-select',
                label: translations.componentDashboardStartupEditProfileFormFocusMarketFieldLabel,
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
                color: 'secondary',
                options: teamSizesDropdownOptions,
                labelId: 'startup-edit-profile-form-team-size-id-select',
                label: translations.componentDashboardStartupEditProfileFormTeamSizeFieldLabel,
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
                color: 'secondary',
                options: investmentStageTypesDropdownOptions,
                labelId: 'startup-edit-profile-form-investment-stage-type-ids-select',
                label:
                  translations.componentDashboardStartupEditProfileFormInvestmentStageFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
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
                color: 'secondary',
                options: startupSectorsDropdownOptions,
                labelId: 'startup-edit-profile-form-startup-sector-ids-select',
                label: translations.componentDashboardStartupEditProfileFormStartupSectorFieldLabel,
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
                color: 'secondary',
                options: investmentSizesDropdownOptions,
                labelId: 'startup-edit-profile-form-investment-size-ids-select',
                label:
                  translations.componentDashboardStartupEditProfileFormInvestmentSizeFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteWithController
              autocompleteProps={{
                multiple: true,
                fullWidth: true,
                disableCloseOnSelect: true,
                limit: INDUSTRIAL_SECTORS_LIMIT,
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
                color: 'secondary',
                label:
                  translations.componentDashboardStartupEditProfileFormIndustrialSectorsFieldLabel,
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
                      translations.componentDashboardStartupEditProfileFormStartupClaimFieldMaxLengthError,
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
                multiline: true,
                color: 'secondary',
                autoComplete: 'disabled',
                rows: deviceData.isSmallerThanSM ? 4 : 3,
                label: translations.componentDashboardStartupEditProfileFormStartupClaimFieldLabel,
                placeholder:
                  translations.componentDashboardStartupEditProfileFormStartupClaimFieldPlaceholder,
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
                      translations.componentDashboardStartupEditProfileFormMissionStatementFieldMaxLengthError,
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
                multiline: true,
                color: 'secondary',
                autoComplete: 'disabled',
                rows: deviceData.isSmallerThanSM ? 4 : 3,
                label:
                  translations.componentDashboardStartupEditProfileFormMissionStatementFieldLabel,
                placeholder:
                  // eslint-disable-next-line max-len
                  translations.componentDashboardStartupEditProfileFormMissionStatementFieldPlaceholder,
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
                      translations.componentDashboardStartupEditProfileFormVisionStatementFieldMaxLengthError,
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
                multiline: true,
                color: 'secondary',
                autoComplete: 'disabled',
                rows: deviceData.isSmallerThanSM ? 4 : 3,
                label:
                  translations.componentDashboardStartupEditProfileFormVisionStatementFieldLabel,
                placeholder:
                  // eslint-disable-next-line max-len
                  translations.componentDashboardStartupEditProfileFormVisionStatementFieldPlaceholder,
              }}
            />
          </Grid>
          <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
            <Grid item xs={deviceData.isSmallerThanSM ? 6 : 3}>
              <Button
                fullWidth
                color="secondary"
                disabled={!isDirty}
                size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
                variant="outlined"
                onClick={onResetButtonClick}
              >
                {translations.commonButtonsReset}
              </Button>
            </Grid>
            <Grid item xs={deviceData.isSmallerThanSM ? 6 : 3}>
              <LoadingButton
                fullWidth
                color="info"
                disabled={!isDirty}
                loading={isLoading}
                size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
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
