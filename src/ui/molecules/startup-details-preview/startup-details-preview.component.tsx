import {
  Apartment as ApartmentIcon,
  Business as BusinessIcon,
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
import Image from 'next/image';
import { useQuery } from 'react-query';

import { ProfileDetailsPreviewLabel, Swiper, SwiperSlide } from '@ui';

import {
  mapFocusMarketsToDropdownOptions,
  mapIndustrialSectorsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapStartupProfileCreatorTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
  useUser,
} from '@utils';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '@infrastructure';

import { translationStrings } from './startup-details-preview.defaults';
import S from './startup-details-preview.styles';
import { IStartupDetailsPreviewProps } from './startup-details-preview.types';
import { transformNumberArrayToChips } from './utils';

export const StartupDetailsPreview = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  profileDetails,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IStartupDetailsPreviewProps): JSX.Element => {
  const { user: loggedUserDetails } = useUser();
  const { data: fetchedProfileDetails } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetails.id],
    profileDetailsAction(profileDetails.id),
  );

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

  const mergedProfileDetails = { ...profileDetails, ...fetchedProfileDetails?.data };

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
  const investmentStageTypeChips = transformNumberArrayToChips(
    mergedProfileDetails.investmentStageTypes,
    loggedUserDetails?.investment_stage_types,
    investmentStageTypesDropdownOptions,
  );
  const startupProfileCreatorTypeChips = transformNumberArrayToChips(
    [loggedUserDetails?.startup_profile_creator_type_id].filter(Boolean) as number[],
    [mergedProfileDetails.startupProfileCreatorTypeId].filter(Boolean) as number[],
    startupProfileCreatorTypesDropdownOptions,
  );

  return (
    <S.StyledWrapper swiperPaginationBullets={mergedProfileDetails.avatars.length}>
      <Swiper
        grabCursor
        loop
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
        <ProfileDetailsPreviewLabel
          icon={<FlagIcon />}
          label={translations.componentStartupDetailsPreviewMissionLabel}
        >
          {mergedProfileDetails.missionStatement}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<RemoveRedEyeIcon />}
          label={translations.componentStartupDetailsPreviewVisionLabel}
        >
          {mergedProfileDetails.visionStatement}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<RocketIcon />}
          label={translations.componentStartupDetailsPreviewClaimLabel}
        >
          {mergedProfileDetails.startupClaim}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<LocationCityIcon />}
          label={translations.componentStartupDetailsPreviewLocationLabel}
        >
          {mergedProfileDetails.location}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<ApartmentIcon />}
          label={translations.componentStartupDetailsPreviewCompanyNameLabel}
        >
          {mergedProfileDetails.companyName}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<PersonIcon />}
          label={translations.componentStartupDetailsPreviewProfileCreatorLabel}
        >
          {startupProfileCreatorTypeChips} {mergedProfileDetails.firstName}{' '}
          {mergedProfileDetails.lastName}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<MonetizationOnIcon />}
          label={translations.componentStartupDetailsPreviewInvestmentSizesLabel}
        >
          {investmentSizeChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<PieChartIcon />}
          label={translations.componentStartupDetailsPreviewInvestmentStagesLabel}
        >
          {investmentStageTypeChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<BusinessIcon />}
          label={translations.componentStartupDetailsPreviewSectorsLabel}
        >
          {startupSectorChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<FactoryIcon />}
          label={translations.componentStartupDetailsPreviewIndustrialSectorsLabel}
        >
          {industrialSectorChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<ScreenRotationIcon />}
          label={translations.componentStartupDetailsPreviewFocusMarketsLabel}
        >
          {focusMarketChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<GroupIcon />}
          label={translations.componentStartupDetailsPreviewTeamSizesLabel}
        >
          {teamSizeChips}
        </ProfileDetailsPreviewLabel>
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
