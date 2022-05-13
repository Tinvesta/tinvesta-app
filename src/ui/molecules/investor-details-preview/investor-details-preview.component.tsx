import {
  Apartment as ApartmentIcon,
  Business as BusinessIcon,
  Factory as FactoryIcon,
  Group as GroupIcon,
  LocationCity as LocationCityIcon,
  MonetizationOn as MonetizationOnIcon,
  Person as PersonIcon,
  PieChart as PieChartIcon,
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
  mapInvestorDemandTypesToDropdownOptions,
  mapInvestorProfileTypesToDropdownOptions,
  mapStartupSectorsToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
  useUser,
} from '@utils';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '@infrastructure';

import { translationStrings } from './investor-details-preview.defaults';
import S from './investor-details-preview.styles';
import { IInvestorDetailsPreviewProps } from './investor-details-preview.types';
import { transformNumberArrayToChips } from './utils';

export const InvestorDetailsPreview = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  profileDetails,
  startupSectors,
  teamSizes,
}: IInvestorDetailsPreviewProps): JSX.Element => {
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
          icon={<RocketIcon />}
          label={translations.componentInvestorDetailsPreviewWhyStartupShouldMatchWithYouLabel}
        >
          {mergedProfileDetails.whyStartupShouldMatchWithYou}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<LocationCityIcon />}
          label={translations.componentInvestorDetailsPreviewLocationLabel}
        >
          {mergedProfileDetails.location}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<ApartmentIcon />}
          label={translations.componentInvestorDetailsPreviewCompanyNameLabel}
        >
          {mergedProfileDetails.companyName}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<PersonIcon />}
          label={translations.componentInvestorDetailsPreviewProfileCreatorLabel}
        >
          {investorProfileTypeChips} {mergedProfileDetails.firstName}{' '}
          {mergedProfileDetails.lastName}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<MonetizationOnIcon />}
          label={translations.componentInvestorDetailsPreviewDemandLabel}
        >
          {investorDemandTypeChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<MonetizationOnIcon />}
          label={translations.componentInvestorDetailsPreviewInvestmentSizesLabel}
        >
          {investmentSizeChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<PieChartIcon />}
          label={translations.componentInvestorDetailsPreviewInvestmentStagesLabel}
        >
          {investmentStageTypeChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<BusinessIcon />}
          label={translations.componentInvestorDetailsPreviewSectorsLabel}
        >
          {startupSectorChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<FactoryIcon />}
          label={translations.componentInvestorDetailsPreviewIndustrialSectorsLabel}
        >
          {industrialSectorChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<ScreenRotationIcon />}
          label={translations.componentInvestorDetailsPreviewFocusMarketsLabel}
        >
          {focusMarketChips}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel
          icon={<GroupIcon />}
          label={translations.componentInvestorDetailsPreviewTeamSizesLabel}
        >
          {teamSizeChips}
        </ProfileDetailsPreviewLabel>
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
