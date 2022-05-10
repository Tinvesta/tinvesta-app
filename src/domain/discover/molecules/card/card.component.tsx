import {
  AttachMoney as AttachMoneyIcon,
  LocationCity as LocationCityIcon,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { isStartupProfile } from '@utils';

import S from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({ record }: ICardProps) => {
  const isStartup = isStartupProfile(record.clientTypeId);

  console.log(isStartup);

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
      <S.StyledUserInfoWrapper>
        <Typography fontWeight={900} variant="h6">{`"${record.missionStatement}"`}</Typography>
        <Typography style={{ paddingTop: 10 }} variant="body1">
          {`"${record.startupClaim}"`}
        </Typography>
        <Typography style={{ paddingTop: 10 }} variant="body1">
          <LocationCityIcon />
          {record.location}
        </Typography>
        <Typography style={{ paddingTop: 10 }} variant="body1">
          <AttachMoneyIcon />
          {record.investmentSizes}
        </Typography>
      </S.StyledUserInfoWrapper>
    </S.StyledWrapper>
  );
};
