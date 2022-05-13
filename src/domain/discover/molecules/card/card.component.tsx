import {
  Autorenew as AutorenewIcon,
  Group as GroupIcon,
  Info as InfoIcon,
  LocationCity as LocationCityIcon,
  MonetizationOn as MonetizationOnIcon,
  PieChart as PieChartIcon,
  ScreenRotation as ScreenRotationIcon,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import { ProfileDetailsPreview } from '@ui';

import {
  isStartupProfile,
  mapFocusMarketsToDropdownOptions,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapInvestorDemandTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  truncate,
  useDeviceDetect,
  useTranslation,
  useUser,
} from '@utils';

import { transformNumberArrayToChips } from '../../utils';
import { translationStrings } from './card.defaults';
import S from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  record,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: ICardProps) => {
  const { user } = useUser();
  const { deviceData } = useDeviceDetect();
  const [displayProfileDetails, setDisplayProfileDetails] = useState(false);

  const isStartup = isStartupProfile(record.clientTypeId);

  const translations = useTranslation(translationStrings);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(
    investmentSizes,
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
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);
  const focusMarketsDropdownOptions = mapFocusMarketsToDropdownOptions(focusMarkets, translations);

  const showProfileDetails = () => setDisplayProfileDetails(true);

  const renderStartupUserInfo = () => {
    const teamSizeChips = transformNumberArrayToChips(
      record.teamSizes,
      user?.team_sizes,
      teamSizesDropdownOptions,
    );

    const investmentSizeChips = transformNumberArrayToChips(
      record.investmentSizes,
      user?.investment_sizes,
      investmentSizesDropdownOptions,
    );

    const investmentStageTypeChips = transformNumberArrayToChips(
      record.investmentStageTypes,
      user?.investment_stage_types,
      investmentStageTypesDropdownOptions,
    );

    const focusMarketTypeChips = transformNumberArrayToChips(
      record.focusMarkets,
      user?.focus_markets,
      focusMarketsDropdownOptions,
    );

    const missionStatement = deviceData.isSmallerThanXS
      ? truncate(record.missionStatement || '', 100)
      : record.missionStatement;

    return (
      <S.StyledUserInfoWrapper>
        <Typography fontWeight={900} variant="body1">{`"${missionStatement}"`}</Typography>
        <S.StyledUserInfoTypography variant="body2">
          {`"${record.startupClaim}"`}
        </S.StyledUserInfoTypography>
        <S.StyledUserInfoTypography variant="body2">
          <LocationCityIcon />
          {record.location}
        </S.StyledUserInfoTypography>
        <S.StyledChipsAndActionsWrapper>
          <S.StyledUserInfoGroupWrapper>
            {deviceData.isBiggerThanXS && teamSizeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <GroupIcon />
                {teamSizeChips}
              </S.StyledUserInfoTypography>
            )}
            {investmentSizeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <MonetizationOnIcon />
                {investmentSizeChips}
              </S.StyledUserInfoTypography>
            )}
            {investmentStageTypeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <PieChartIcon />
                {investmentStageTypeChips}
              </S.StyledUserInfoTypography>
            )}
            {deviceData.isBiggerThanXS && focusMarketTypeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <ScreenRotationIcon />
                {focusMarketTypeChips}
              </S.StyledUserInfoTypography>
            )}
          </S.StyledUserInfoGroupWrapper>
          <S.StyledActionButtonsWrapper>
            <S.StyledInfoIconButton color="primary" size="small" onClick={showProfileDetails}>
              <InfoIcon fontSize="large" />
            </S.StyledInfoIconButton>
          </S.StyledActionButtonsWrapper>
        </S.StyledChipsAndActionsWrapper>
      </S.StyledUserInfoWrapper>
    );
  };

  const renderInvestorUserInfo = () => {
    const investmentSizeChips = transformNumberArrayToChips(
      record.investmentSizes,
      user?.investment_sizes,
      investmentSizesDropdownOptions,
    );

    const investorDemandTypeChips = transformNumberArrayToChips(
      record.investmentStageTypes,
      user?.investment_stage_types,
      investorDemandTypesDropdownOptions,
    );

    const investmentStageTypeChips = transformNumberArrayToChips(
      record.investmentStageTypes,
      user?.investment_stage_types,
      investmentStageTypesDropdownOptions,
    );

    const focusMarketTypeChips = transformNumberArrayToChips(
      record.focusMarkets,
      user?.focus_markets,
      focusMarketsDropdownOptions,
    );

    const whyStartupShouldMatchWithYou = deviceData.isSmallerThanXS
      ? truncate(record.whyStartupShouldMatchWithYou, 85)
      : record.whyStartupShouldMatchWithYou;

    return (
      <S.StyledUserInfoWrapper>
        <Typography
          fontWeight={900}
          variant="body1"
        >{`"${whyStartupShouldMatchWithYou}"`}</Typography>
        <S.StyledUserInfoTypography variant="body2">
          <LocationCityIcon />
          {record.location}
        </S.StyledUserInfoTypography>
        <S.StyledChipsAndActionsWrapper>
          <S.StyledUserInfoGroupWrapper>
            {investorDemandTypeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <AutorenewIcon />
                {investorDemandTypeChips}
              </S.StyledUserInfoTypography>
            )}
            {investmentSizeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <MonetizationOnIcon />
                {investmentSizeChips}
              </S.StyledUserInfoTypography>
            )}
            {deviceData.isBiggerThanXS && investmentStageTypeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <PieChartIcon />
                {investmentStageTypeChips}
              </S.StyledUserInfoTypography>
            )}
            {deviceData.isBiggerThanXS && focusMarketTypeChips.length > 0 && (
              <S.StyledUserInfoTypography withFlexWrap variant="body2">
                <ScreenRotationIcon />
                {focusMarketTypeChips}
              </S.StyledUserInfoTypography>
            )}
          </S.StyledUserInfoGroupWrapper>
          <S.StyledActionButtonsWrapper>
            <S.StyledInfoIconButton color="primary" size="small" onClick={showProfileDetails}>
              <InfoIcon fontSize="large" />
            </S.StyledInfoIconButton>
          </S.StyledActionButtonsWrapper>
        </S.StyledChipsAndActionsWrapper>
      </S.StyledUserInfoWrapper>
    );
  };

  return (
    <S.StyledWrapper>
      <S.StyledImageWrapper>
        {!displayProfileDetails && (
          <Image
            alt={translations.commonDefaultImageAlt}
            layout="fill"
            objectFit="cover"
            src={record.avatars[0]}
          />
        )}
      </S.StyledImageWrapper>
      {!displayProfileDetails ? (
        <>{isStartup ? renderStartupUserInfo() : renderInvestorUserInfo()}</>
      ) : (
        <S.StyledProfilePreviewWrapper>
          <ProfileDetailsPreview
            focusMarkets={focusMarkets}
            industrialSectors={industrialSectors}
            investmentSizes={investmentSizes}
            investmentStageTypes={investmentStageTypes}
            investorDemandTypes={investorDemandTypes}
            investorProfileTypes={investorProfileTypes}
            profileDetails={record}
            startupProfileCreatorTypes={startupProfileCreatorTypes}
            startupSectors={startupSectors}
            teamSizes={teamSizes}
          />
        </S.StyledProfilePreviewWrapper>
      )}
    </S.StyledWrapper>
  );
};
