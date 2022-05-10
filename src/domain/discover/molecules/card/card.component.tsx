import {
  Autorenew as AutorenewIcon,
  Group as GroupIcon,
  LocationCity as LocationCityIcon,
  MonetizationOn as MonetizationOnIcon,
  PieChart as PieChartIcon,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';

import {
  isStartupProfile,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapInvestorDemandTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
  useUser,
} from '@utils';

import { transformNumberArrayToChips } from '../../utils';
import { translationStrings } from './card.defaults';
import S from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  record,
  teamSizes,
}: ICardProps) => {
  const { user } = useUser();

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

  const renderStartupUserInfo = () => {
    const teamSizeChips = transformNumberArrayToChips(
      user?.team_sizes,
      record.teamSizes,
      teamSizesDropdownOptions,
    );

    const investmentSizeChips = transformNumberArrayToChips(
      user?.investment_sizes,
      record.investmentSizes,
      investmentSizesDropdownOptions,
    );

    const investmentStageTypeChips = transformNumberArrayToChips(
      user?.investment_stage_types,
      record.investmentStageTypes,
      investmentStageTypesDropdownOptions,
    );

    return (
      <S.StyledUserInfoWrapper>
        <Typography fontWeight={900} variant="h6">{`"${record.missionStatement}"`}</Typography>
        <S.StyledUserInfoTypography variant="body1">
          {`"${record.startupClaim}"`}
        </S.StyledUserInfoTypography>
        <S.StyledUserInfoTypography variant="body1">
          <LocationCityIcon />
          {record.location}
        </S.StyledUserInfoTypography>
        <S.StyledUserInfoGroupWrapper>
          {teamSizeChips.length > 0 && (
            <S.StyledUserInfoTypography variant="body1">
              <GroupIcon />
              {teamSizeChips}
            </S.StyledUserInfoTypography>
          )}
          {investmentSizeChips.length > 0 && (
            <S.StyledUserInfoTypography variant="body1">
              <MonetizationOnIcon />
              {investmentSizeChips}
            </S.StyledUserInfoTypography>
          )}
          {investmentStageTypeChips.length > 0 && (
            <S.StyledUserInfoTypography variant="body1">
              <PieChartIcon />
              {investmentStageTypeChips}
            </S.StyledUserInfoTypography>
          )}
        </S.StyledUserInfoGroupWrapper>
      </S.StyledUserInfoWrapper>
    );
  };

  const renderInvestorUserInfo = () => {
    const investmentSizeChips = transformNumberArrayToChips(
      user?.investment_sizes,
      record.investmentSizes,
      investmentSizesDropdownOptions,
    );

    const investorDemandTypeChips = transformNumberArrayToChips(
      user?.investment_stage_types,
      record.investmentStageTypes,
      investorDemandTypesDropdownOptions,
    );

    const investmentStageTypeChips = transformNumberArrayToChips(
      user?.investment_stage_types,
      record.investmentStageTypes,
      investmentStageTypesDropdownOptions,
    );

    return (
      <S.StyledUserInfoWrapper>
        <Typography
          fontWeight={900}
          variant="h6"
        >{`"${record.whyStartupShouldMatchWithYou}"`}</Typography>
        <S.StyledUserInfoTypography variant="body1">
          <LocationCityIcon />
          {record.location}
        </S.StyledUserInfoTypography>
        <S.StyledUserInfoGroupWrapper>
          {investorDemandTypeChips.length > 0 && (
            <S.StyledUserInfoTypography variant="body1">
              <AutorenewIcon />
              {investorDemandTypeChips}
            </S.StyledUserInfoTypography>
          )}
          {investmentSizeChips.length > 0 && (
            <S.StyledUserInfoTypography variant="body1">
              <MonetizationOnIcon />
              {investmentSizeChips}
            </S.StyledUserInfoTypography>
          )}
          {investmentStageTypeChips.length > 0 && (
            <S.StyledUserInfoTypography variant="body1">
              <PieChartIcon />
              {investmentStageTypeChips}
            </S.StyledUserInfoTypography>
          )}
        </S.StyledUserInfoGroupWrapper>
      </S.StyledUserInfoWrapper>
    );
  };

  return (
    <S.StyledWrapper>
      <S.StyledImageWrapper>
        <S.StyledImageGradient />
        <Image
          alt="Profile image"
          height={600}
          objectFit="cover"
          src={record.avatars[0]}
          width={450}
        />
      </S.StyledImageWrapper>
      {isStartup ? renderStartupUserInfo() : renderInvestorUserInfo()}
    </S.StyledWrapper>
  );
};
