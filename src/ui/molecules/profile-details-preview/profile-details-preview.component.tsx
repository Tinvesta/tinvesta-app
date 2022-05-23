import {
  AlternateEmail as AlternateEmailIcon,
  Apartment as ApartmentIcon,
  Business as BusinessIcon,
  ContentCopy as ContentCopyIcon,
  Factory as FactoryIcon,
  Flag as FlagIcon,
  Group as GroupIcon,
  LocationCity as LocationCityIcon,
  MonetizationOn as MonetizationOnIcon,
  Person as PersonIcon,
  PieChart as PieChartIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Rocket as RocketIcon,
  ScreenRotation as ScreenRotationIcon,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useQuery } from 'react-query';

import { CenterBlockLayout, Loader, Swiper, SwiperSlide } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapInvestorDemandTypesToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useDeviceDetect,
  useTranslation,
  useUser,
} from '@utils';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '@infrastructure';

import { ProfileDetailsPreviewLabel } from './parts';
import { translationStrings } from './profile-details-preview.defaults';
import S from './profile-details-preview.styles';
import { IProfileDetailsPreviewProps } from './profile-details-preview.types';
import { profileFirstNameAndLastNameToFullName, transformNumberArrayToChips } from './utils';

const ProfileDetailsPreviewComponent = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  profileDetails,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IProfileDetailsPreviewProps): JSX.Element => {
  const [copied, setCopied] = useState(false);

  const { deviceData } = useDeviceDetect();
  const { user: loggedUserDetails } = useUser();
  const { data: profileDetailsActionData, isLoading: isProfileDetailsActionLoading } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetails.id],
    profileDetailsAction(profileDetails.id),
  );

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  const onCopy = () => !copied && setCopied(true);

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
  const startupProfileCreatorTypesDropdownOptions = mapStartupProfileCreatorTypesToDropdownOptions(
    startupProfileCreatorTypes,
    translations,
  );

  const mergedProfileDetails = { ...profileDetails, ...profileDetailsActionData?.data };

  const teamSizeChips = transformNumberArrayToChips(
    mergedProfileDetails.teamSizes,
    loggedUserDetails?.team_sizes,
    teamSizesDropdownOptions,
  );
  const focusMarketChips = transformNumberArrayToChips(
    loggedUserDetails?.focus_markets,
    mergedProfileDetails.focusMarkets,
    focusMarketsDropdownOptions,
  );
  const startupSectorChips = transformNumberArrayToChips(
    mergedProfileDetails.startupSectors,
    loggedUserDetails?.startup_sectors,
    startupSectorsDropdownOptions,
  );
  const investmentSizeChips = transformNumberArrayToChips(
    mergedProfileDetails.investmentSizes,
    loggedUserDetails?.investment_sizes,
    investmentSizesDropdownOptions,
  );
  const industrialSectorChips = transformNumberArrayToChips(
    mergedProfileDetails.industrialSectors,
    loggedUserDetails?.industrial_sectors,
    industrialSectorsDropdownOptions,
  );
  const investorDemandTypeChips = transformNumberArrayToChips(
    mergedProfileDetails.investorDemandTypes,
    mergedProfileDetails.investorDemandTypes,
    investorDemandTypesDropdownOptions,
  );
  const investmentStageTypeChips = transformNumberArrayToChips(
    mergedProfileDetails.investmentStageTypes,
    loggedUserDetails?.investment_stage_types,
    investmentStageTypesDropdownOptions,
  );
  const investorProfileTypeChips = transformNumberArrayToChips(
    [loggedUserDetails?.investor_profile_type_id].filter(Boolean) as number[],
    [mergedProfileDetails.investorProfileTypeId].filter(Boolean) as number[],
    investorProfileTypesDropdownOptions,
  );
  const startupProfileCreatorTypeChips = transformNumberArrayToChips(
    [loggedUserDetails?.startup_profile_creator_type_id].filter(Boolean) as number[],
    [mergedProfileDetails.startupProfileCreatorTypeId].filter(Boolean) as number[],
    startupProfileCreatorTypesDropdownOptions,
  );

  const fullName = profileFirstNameAndLastNameToFullName(mergedProfileDetails);

  return (
    <S.StyledWrapper swiperPaginationBullets={mergedProfileDetails.avatars.length}>
      <Swiper
        grabCursor
        touchMoveStopPropagation
        modules={['keyboard', 'scrollbar', 'pagination']}
        pagination={{ clickable: true }}
      >
        {mergedProfileDetails.avatars.map((_avatar) => (
          <SwiperSlide key={_avatar}>
            <S.StyledImageWrapper>
              <Image
                alt={translations.commonDefaultImageAlt}
                layout="fill"
                objectFit="cover"
                src={_avatar}
              />
            </S.StyledImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.StyledContentWrapper>
        {isProfileDetailsActionLoading ? (
          <CenterBlockLayout>
            <Loader size="small" />
          </CenterBlockLayout>
        ) : (
          <>
            <ProfileDetailsPreviewLabel
              icon={<FlagIcon />}
              label={translations.componentProfileDetailsPreviewMissionLabel}
            >
              {mergedProfileDetails.missionStatement}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<RemoveRedEyeIcon />}
              label={translations.componentProfileDetailsPreviewVisionLabel}
            >
              {mergedProfileDetails.visionStatement}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<RocketIcon />}
              label={translations.componentProfileDetailsPreviewClaimLabel}
            >
              {mergedProfileDetails.startupClaim}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<RocketIcon />}
              label={translations.componentProfileDetailsPreviewWhyStartupShouldMatchWithYouLabel}
            >
              {mergedProfileDetails.whyStartupShouldMatchWithYou}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<LocationCityIcon />}
              label={translations.componentProfileDetailsPreviewLocationLabel}
            >
              {mergedProfileDetails.location}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<ApartmentIcon />}
              label={translations.componentProfileDetailsPreviewCompanyNameLabel}
            >
              {mergedProfileDetails.companyName}
            </ProfileDetailsPreviewLabel>
            {investorProfileTypeChips.length > 0 && (
              <ProfileDetailsPreviewLabel
                icon={<PersonIcon />}
                label={translations.componentProfileDetailsPreviewProfileCreatorLabel}
              >
                {investorProfileTypeChips}
                {fullName}
              </ProfileDetailsPreviewLabel>
            )}
            {startupProfileCreatorTypeChips.length > 0 && (
              <ProfileDetailsPreviewLabel
                icon={<PersonIcon />}
                label={translations.componentProfileDetailsPreviewProfileCreatorLabel}
              >
                {startupProfileCreatorTypeChips}
                {fullName}
              </ProfileDetailsPreviewLabel>
            )}
            {mergedProfileDetails.contactEmail && (
              <ProfileDetailsPreviewLabel
                icon={<AlternateEmailIcon />}
                label={translations.componentProfileDetailsPreviewContactEmailLabel}
              >
                <CopyToClipboard text={mergedProfileDetails.contactEmail} onCopy={onCopy}>
                  <Button
                    color="secondary"
                    disabled={copied}
                    endIcon={<ContentCopyIcon />}
                    size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
                    variant="outlined"
                  >
                    <S.StyledButtonEllipsis>
                      {mergedProfileDetails.contactEmail}
                    </S.StyledButtonEllipsis>
                  </Button>
                </CopyToClipboard>
              </ProfileDetailsPreviewLabel>
            )}
            <ProfileDetailsPreviewLabel
              icon={<MonetizationOnIcon />}
              label={translations.componentProfileDetailsPreviewDemandLabel}
            >
              {investorDemandTypeChips}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<MonetizationOnIcon />}
              label={translations.componentProfileDetailsPreviewInvestmentSizesLabel}
            >
              {investmentSizeChips}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<PieChartIcon />}
              label={translations.componentProfileDetailsPreviewInvestmentStagesLabel}
            >
              {investmentStageTypeChips}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<BusinessIcon />}
              label={translations.componentProfileDetailsPreviewSectorsLabel}
            >
              {startupSectorChips}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<FactoryIcon />}
              label={translations.componentProfileDetailsPreviewIndustrialSectorsLabel}
            >
              {industrialSectorChips}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<ScreenRotationIcon />}
              label={translations.componentProfileDetailsPreviewFocusMarketsLabel}
            >
              {focusMarketChips}
            </ProfileDetailsPreviewLabel>
            <ProfileDetailsPreviewLabel
              icon={<GroupIcon />}
              label={translations.componentProfileDetailsPreviewTeamSizesLabel}
            >
              {teamSizeChips}
            </ProfileDetailsPreviewLabel>
          </>
        )}
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};

export const ProfileDetailsPreview = memo(ProfileDetailsPreviewComponent);
