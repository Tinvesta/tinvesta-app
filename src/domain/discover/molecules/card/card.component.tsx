import {
  Autorenew as AutorenewIcon,
  Info as InfoIcon,
  LocationCity as LocationCityIcon,
  MonetizationOn as MonetizationOnIcon,
  PieChart as PieChartIcon,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import { ProfileDetailsPreview } from '@ui';

import {
  isStartupProfile,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapInvestorDemandTypesToDropdownOptions,
  truncate,
  useTranslation,
  useUser,
} from '@utils';

import { transformNumberArrayToChips } from '../../utils';
import { translationStrings } from './card.defaults';
import S from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({
  enableProfilePreviewMode,
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
  const chipSize = deviceData.isSmallerThanXS ? 'small' : 'medium';

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

  const showProfileDetails = () => {
    enableProfilePreviewMode();
    setDisplayProfileDetails(true);
  };

  const renderStartupUserInfo = () => {
    const investmentSizeChips = transformNumberArrayToChips(
      record.investmentSizes,
      user?.investment_sizes,
      investmentSizesDropdownOptions,
      chipSize,
    );

    const investmentStageTypeChips = transformNumberArrayToChips(
      record.investmentStageTypes,
      user?.investment_stage_types,
      investmentStageTypesDropdownOptions,
      chipSize,
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
          </S.StyledUserInfoGroupWrapper>
          <S.StyledActionButtonsWrapper>
            <S.StyledInfoIconButton color="secondary" size="small" onClick={showProfileDetails}>
              <InfoIcon fontSize={deviceData.isSmallerThanXS ? 'medium' : 'large'} />
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
      chipSize,
    );

    const investorDemandTypeChips = transformNumberArrayToChips(
      record.investmentStageTypes,
      user?.investment_stage_types,
      investorDemandTypesDropdownOptions,
      chipSize,
    );

    const investmentStageTypeChips = transformNumberArrayToChips(
      record.investmentStageTypes,
      user?.investment_stage_types,
      investmentStageTypesDropdownOptions,
      chipSize,
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
          </S.StyledUserInfoGroupWrapper>
          <S.StyledActionButtonsWrapper>
            <S.StyledInfoIconButton color="secondary" size="small" onClick={showProfileDetails}>
              <InfoIcon fontSize={deviceData.isSmallerThanXS ? 'medium' : 'large'} />
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
      {displayProfileDetails ? (
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
      ) : (
        <>{isStartup ? renderStartupUserInfo() : renderInvestorUserInfo()}</>
      )}
    </S.StyledWrapper>
  );
};
