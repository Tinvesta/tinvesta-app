import { Typography } from '@mui/material';
import Image from 'next/image';

import S from './card.styles';
import { ICardProps } from './card.types';

export const Card = ({ record }: ICardProps) => (
  <S.StyledWrapper>
    <S.StyledImageWrapper>
      <S.StyledImageGradient />
      <Image
        alt="Profile image"
        height={600}
        objectFit="cover"
        src={record.avatars[0]}
        width={400}
      />
    </S.StyledImageWrapper>
    <S.StyledUserInfoWrapper>
      <Typography fontWeight={900} variant="h5">
        {record.companyName}
      </Typography>
      <Typography variant="subtitle2">{record.location}</Typography>
      <Typography fontWeight={900} style={{ paddingTop: 10 }} variant="body2">
        {`"${record.missionStatement}"`}
      </Typography>
    </S.StyledUserInfoWrapper>
  </S.StyledWrapper>
);
