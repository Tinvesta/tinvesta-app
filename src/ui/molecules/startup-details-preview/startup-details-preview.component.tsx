import {
  Apartment as ApartmentIcon,
  Flag as FlagIcon,
  LocationCity as LocationCityIcon,
  Person as PersonIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Rocket as RocketIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import { useQuery } from 'react-query';

import { ProfileDetailsPreviewLabel, Swiper, SwiperSlide } from '@ui';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '@infrastructure';

import S from './startup-details-preview.styles';
import { IStartupDetailsPreviewProps } from './startup-details-preview.types';

export const StartupDetailsPreview = ({
  profileDetails,
}: IStartupDetailsPreviewProps): JSX.Element => {
  const { data: fetchedProfileDetails } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetails.id],
    profileDetailsAction(profileDetails.id),
  );

  const mergedProfileDetails = { ...profileDetails, ...fetchedProfileDetails?.data };

  // TODO - translations
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
              <Image alt="Profile image" layout="fill" objectFit="cover" src={_avatar} />
            </S.StyledImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.StyledContentWrapper>
        <ProfileDetailsPreviewLabel icon={<FlagIcon />} label="Mission">
          {mergedProfileDetails.missionStatement}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel icon={<RemoveRedEyeIcon />} label="Vision">
          {mergedProfileDetails.visionStatement}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel icon={<RocketIcon />} label="Claim">
          {mergedProfileDetails.startupClaim}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel icon={<LocationCityIcon />} label="Location">
          {mergedProfileDetails.location}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel icon={<ApartmentIcon />} label="Company Name">
          {mergedProfileDetails.companyName}
        </ProfileDetailsPreviewLabel>
        <ProfileDetailsPreviewLabel icon={<PersonIcon />} label="Profile Creator Full Name">
          {mergedProfileDetails.firstName} {mergedProfileDetails.lastName}
        </ProfileDetailsPreviewLabel>
        {JSON.stringify(mergedProfileDetails, null, 2)}
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
