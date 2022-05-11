import Image from 'next/image';
import { useQuery } from 'react-query';

import { Swiper, SwiperSlide } from '@ui';

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

  console.log(fetchedProfileDetails);

  return (
    <S.StyledWrapper>
      <Swiper
        grabCursor
        loop
        touchMoveStopPropagation
        modules={['keyboard', 'scrollbar', 'pagination']}
        pagination={{ clickable: true }}
      >
        {profileDetails.avatars.map((_avatar) => (
          <SwiperSlide key={_avatar}>
            <Image alt="Startup avatar" height={700} src={_avatar} width={450} />
          </SwiperSlide>
        ))}
      </Swiper>
      {JSON.stringify(profileDetails, null, 2)}
    </S.StyledWrapper>
  );
};
