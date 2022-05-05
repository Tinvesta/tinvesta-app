import { LoadingButton } from '@mui/lab';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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

import { EMAIL_UNIVERSAL_REGEX } from '@constants';

import { IEditProfileFormFieldsData } from '../../profile.types';
import {
  defaultFormFieldsValues,
  translationStrings,
} from './desktop-investor-edit-profile-form.defaults';
import S from './desktop-investor-edit-profile-form.styles';
import { IDesktopInvestorEditProfileFormProps } from './desktop-investor-edit-profile-form.types';

export const DesktopInvestorEditProfileForm = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  onSubmit,
  profileDetails,
  startupSectors,
  teamSizes,
}: IDesktopInvestorEditProfileFormProps): JSX.Element => {
  const [defaultValues, setDefaultValues] = useState(defaultFormFieldsValues);
  const { control, formState, handleSubmit, reset, setValue } = useForm<IEditProfileFormFieldsData>(
    {
      defaultValues,
    },
  );

  useEffect(() => {
    if (profileDetails) {
      setValue('images', profileDetails.avatars, { shouldValidate: true });
      setValue('location', profileDetails.location, { shouldValidate: true });
      setValue('lastName', profileDetails.lastName, { shouldValidate: true });
      setValue('firstName', profileDetails.firstName, { shouldValidate: true });
      setValue('teamSizeIds', profileDetails.teamSizes, { shouldValidate: true });
      setValue('companyName', profileDetails.companyName, { shouldValidate: true });
      setValue('contactEmail', profileDetails.contactEmail, { shouldValidate: true });
      setValue('focusMarketIds', profileDetails.focusMarkets, { shouldValidate: true });
      setValue('startupSectorIds', profileDetails.startupSectors, { shouldValidate: true });
      setValue('investmentSizeIds', profileDetails.investmentSizes, { shouldValidate: true });
      setValue('industrialSectorIds', profileDetails.industrialSectors, { shouldValidate: true });
      setValue('investorDemandTypeIds', profileDetails.investorDemandTypes, {
        shouldValidate: true,
      });
      setValue('investmentStageTypeIds', profileDetails.investmentStageTypes, {
        shouldValidate: true,
      });
      setValue('investorProfileTypeId', profileDetails.investorProfileTypeId || '', {
        shouldValidate: true,
      });
      setValue('whyStartupShouldMatchWithYou', profileDetails.whyStartupShouldMatchWithYou, {
        shouldValidate: true,
      });

      setDefaultValues((prev) => ({
        ...prev,
        images: profileDetails.avatars,
        location: profileDetails.location,
        lastName: profileDetails.lastName,
        firstName: profileDetails.firstName,
        teamSizeIds: profileDetails.teamSizes,
        companyName: profileDetails.companyName,
        contactEmail: profileDetails.contactEmail,
        focusMarketIds: profileDetails.focusMarkets,
        startupSectorIds: profileDetails.startupSectors,
        investmentSizeIds: profileDetails.investmentSizes,
        industrialSectorIds: profileDetails.industrialSectors,
        investorDemandTypeIds: profileDetails.investorDemandTypes,
        investmentStageTypeIds: profileDetails.investmentStageTypes,
        investorProfileTypeId: profileDetails.investorProfileTypeId || '',
        whyStartupShouldMatchWithYou: profileDetails.whyStartupShouldMatchWithYou,
      }));
    }
  }, [profileDetails]);

  const handleResetButtonClick = () => reset(defaultValues);

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

  return (
    <CenterBlockLayout>
      <S.StyledWrapper onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3}>
          <Grid container columnGap={3}>
            <Grid container columnSpacing={4} rowGap={3} xs={8}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
                    options: investorProfileTypesDropdownOptions,
                    labelId:
                      'desktop-onboarding-step-three-investor-investor-profile-type-id-select',
                    label: translations.componentDashboardEditProfileFormYourPositionFieldLabel,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
                    options: teamSizesDropdownOptions,
                    labelId: 'desktop-onboarding-step-four-investor-team-size-ids-select',
                    label: translations.componentDashboardEditProfileFormTeamSizeFieldLabel,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
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
                    labelId:
                      'desktop-onboarding-step-four-investor-investment-stage-type-ids-select',
                    label: translations.componentDashboardEditProfileFormInvestmentStageFieldLabel,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item alignItems="center" display="flex" justifyContent="center" xs={4}>
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
          </Grid>
          <Grid container columnSpacing={4} rowSpacing={3}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
                  options: investorDemandTypesDropdownOptions,
                  label: translations.componentDashboardEditProfileFormDemandFieldLabel,
                  labelId: 'desktop-onboarding-step-five-investor-investor-demand-type-ids-select',
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
                        translations.componentDashboardEditProfileFormWhyStartupShouldMatchWithYouFieldMaxLengthError,
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
                  label:
                    // eslint-disable-next-line max-len
                    translations.componentDashboardEditProfileFormWhyStartupShouldMatchWithYouFieldLabel,
                }}
              />
            </Grid>
          </Grid>
          <Grid item display="flex" gap={4} justifyContent={'flex-end'} xs={12}>
            <Grid item xs={2}>
              <Button
                fullWidth
                disabled={!formState.isDirty}
                size="large"
                variant="outlined"
                onClick={handleResetButtonClick}
              >
                {translations.commonButtonsReset}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <LoadingButton
                fullWidth
                disabled={!formState.isDirty}
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
