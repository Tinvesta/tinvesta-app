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

  console.log(JSON.stringify(fetchedProfileDetails || {}));

  // TODO - translations
  return (
    <S.StyledWrapper swiperPaginationBullets={profileDetails.avatars.length}>
      <Swiper
        grabCursor
        loop
        touchMoveStopPropagation
        modules={['keyboard', 'scrollbar', 'pagination']}
        pagination={{ clickable: true }}
      >
        {profileDetails.avatars.map((_avatar) => (
          <SwiperSlide key={_avatar}>
            <S.StyledImageWrapper>
              <Image alt="Profile image" layout="fill" objectFit="cover" src={_avatar} />
            </S.StyledImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ overflow: 'hidden' }}>{JSON.stringify(profileDetails, null, 2)}</div>
    </S.StyledWrapper>
  );
};
