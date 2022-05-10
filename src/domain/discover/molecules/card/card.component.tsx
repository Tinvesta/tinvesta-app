import {
  AttachMoney as AttachMoneyIcon,
  Group as GroupIcon,
  LocationCity as LocationCityIcon,
  PieChart as PieChartIcon,
} from '@mui/icons-material';
import { Chip, Typography } from '@mui/material';
import Image from 'next/image';

import {
  isStartupProfile,
  mapInvestmentSizesToDropdownOptions,
  mapInvestmentStageTypesToDropdownOptions,
  mapTeamSizesToDropdownOptions,
  useTranslation,
  useUser,
} from '@utils';

import { translationStrings } from './card.defaults';
import S from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({ investmentSizes, investmentStageTypes, record, teamSizes }: ICardProps) => {
  const { user } = useUser();

  console.log(user);

  const isStartup = isStartupProfile(record.clientTypeId);

  const translations = useTranslation(translationStrings);
  const investmentSizesDropdownOptions = mapInvestmentSizesToDropdownOptions(
    investmentSizes,
    translations,
  );
  const investmentStageTypesDropdownOptions = mapInvestmentStageTypesToDropdownOptions(
    investmentStageTypes,
    translations,
  );
  const teamSizesDropdownOptions = mapTeamSizesToDropdownOptions(teamSizes, translations);

  const renderStartupUserInfo = () => {
    const investmentSizeChips = record.investmentSizes.reduce<JSX.Element[]>(
      (_accumulator, _investmentSize) => {
        if (user?.investment_sizes?.includes(_investmentSize)) {
          const chipLabel = investmentSizesDropdownOptions.find(
            (_option) => _option.value === _investmentSize,
          )?.label;

          if (!chipLabel) {
            return _accumulator;
          }

          return [
            ..._accumulator,
            <Chip key={chipLabel as string} label={chipLabel} variant="filled" />,
          ];
        }

        return _accumulator;
      },
      [],
    );

    const teamSizeChips = record.teamSizes.reduce<JSX.Element[]>((_accumulator, _teamSize) => {
      if (user?.team_sizes?.includes(_teamSize)) {
        const chipLabel = teamSizesDropdownOptions.find(
          (_option) => _option.value === _teamSize,
        )?.label;

        if (!chipLabel) {
          return _accumulator;
        }

        return [
          ..._accumulator,
          <Chip key={chipLabel as string} label={chipLabel} variant="filled" />,
        ];
      }

      return _accumulator;
    }, []);

    const investmentStageTypeChips = record.investmentStageTypes.reduce<JSX.Element[]>(
      (_accumulator, _investmentStageType) => {
        if (user?.investment_stage_types?.includes(_investmentStageType)) {
          const chipLabel = investmentStageTypesDropdownOptions.find(
            (_option) => _option.value === _investmentStageType,
          )?.label;

          if (!chipLabel) {
            return _accumulator;
          }

          return [
            ..._accumulator,
            <Chip key={chipLabel as string} label={chipLabel} variant="filled" />,
          ];
        }

        return _accumulator;
      },
      [],
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
              <AttachMoneyIcon />
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
      {isStartup ? renderStartupUserInfo() : null}
    </S.StyledWrapper>
  );
};
