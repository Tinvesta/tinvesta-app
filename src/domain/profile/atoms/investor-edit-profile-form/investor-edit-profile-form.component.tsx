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
  mapInvestorDemandTypesToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  startsOrEndsWithWhitespace,
  useTranslation,
} from '@utils';

import { EMAIL_UNIVERSAL_REGEX, INDUSTRIAL_SECTORS_LIMIT } from '@constants';

import { translationStrings } from './investor-edit-profile-form.defaults';
import S from './investor-edit-profile-form.styles';
import { IInvestorEditProfileFormProps } from './investor-edit-profile-form.types';

const InvestorEditProfileFormComponent = ({
  control,
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  isDirty,
  isLoading,
  onResetButtonClick,
  startupSectors,
  teamSizes,
  ...formProps
}: IInvestorEditProfileFormProps): JSX.Element => {
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
  const investorDemandTypesDropdownOptions = mapInvestorDemandTypesToDropdownOptions(
    investorDemandTypes,
    translations,
  );
  const investmentStageTypesDropdownOptions = mapInvestmentStageTypesToDropdownOptions(
    investmentStageTypes,
    translations,
  );
  const investorProfileTypesDropdownOptions = mapInvestorProfileTypesToDropdownOptions(
    investorProfileTypes,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);

  const desktopHalfInputsWidthXS = deviceData.isSmallerThanMD ? 12 : 6;

  return (
    <CenterBlockLayout>
      <S.StyledWrapper {...formProps}>
        <Grid
          container
          columnSpacing={deviceData.isSmallerThanXS ? 4 : 5}
          rowSpacing={deviceData.isSmallerThanMD ? 1 : 3}
        >
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
                      translations.componentDashboardInvestorEditProfileFormImagesFieldMinLengthError,
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
                      translations.componentDashboardInvestorEditProfileFormFirstNameFieldMaxLengthError,
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
                label: translations.componentDashboardInvestorEditProfileFormFirstNameFieldLabel,
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
                      translations.componentDashboardInvestorEditProfileFormLastNameFieldMaxLengthError,
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
                label: translations.componentDashboardInvestorEditProfileFormLastNameFieldLabel,
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
                      translations.componentDashboardInvestorEditProfileFormContactEmailFieldPatternMatchError,
                  },
                  maxLength: {
                    value: 100,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardInvestorEditProfileFormContactEmailFieldMaxLengthError,
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDashboardInvestorEditProfileFormContactEmailFieldLabel,
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
                      translations.componentDashboardInvestorEditProfileFormCompanyNameFieldMaxLengthError,
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
                label: translations.componentDashboardInvestorEditProfileFormCompanyNameFieldLabel,
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
                label: translations.componentDashboardInvestorEditProfileFormLocationFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investorProfileTypeId',
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
                options: investorProfileTypesDropdownOptions,
                labelId: 'investor-edit-profile-form-investor-profile-type-id-select',
                label: translations.componentDashboardInvestorEditProfileFormYourPositionFieldLabel,
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
                labelId: 'investor-edit-profile-form-focus-market-ids-select',
                label: translations.componentDashboardInvestorEditProfileFormFocusMarketFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'teamSizeIds',
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
                options: teamSizesDropdownOptions,
                labelId: 'investor-edit-profile-form-team-size-ids-select',
                label: translations.componentDashboardInvestorEditProfileFormTeamSizesFieldLabel,
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
                labelId: 'investor-edit-profile-form-investment-stage-type-ids-select',
                label:
                  translations.componentDashboardInvestorEditProfileFormInvestmentStageFieldLabel,
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
                color: 'secondary',
                options: startupSectorsDropdownOptions,
                labelId: 'investor-edit-profile-form-startup-sector-ids-select',
                label:
                  translations.componentDashboardInvestorEditProfileFormStartupSectorFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteWithController
              autocompleteProps={{
                multiple: true,
                fullWidth: true,
                color: 'secondary',
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
                  translations.componentDashboardInvestorEditProfileFormIndustrialSectorsFieldLabel,
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
                labelId: 'investor-edit-profile-form-investment-size-ids-select',
                label:
                  translations.componentDashboardInvestorEditProfileFormInvestmentSizeFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={desktopHalfInputsWidthXS}>
            <SelectWithController
              controllerProps={{
                control,
                name: 'investorDemandTypeIds',
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
                options: investorDemandTypesDropdownOptions,
                label: translations.componentDashboardInvestorEditProfileFormDemandFieldLabel,
                labelId: 'investor-edit-profile-form-investor-demand-type-ids-select',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'whyStartupShouldMatchWithYou',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 160,
                    message:
                      // eslint-disable-next-line max-len
                      translations.componentDashboardInvestorEditProfileFormWhyStartupShouldMatchWithYouFieldMaxLengthError,
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
                  // eslint-disable-next-line max-len
                  translations.componentDashboardInvestorEditProfileFormWhyStartupShouldMatchWithYouFieldLabel,
              }}
            />
          </Grid>
          <Grid
            item
            display="flex"
            gap={deviceData.isSmallerThanXS ? 4 : 5}
            justifyContent="flex-end"
            xs={12}
          >
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

export const InvestorEditProfileForm = memo(InvestorEditProfileFormComponent);
