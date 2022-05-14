import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Empty, Loading } from '@ui';

import { isStartupProfile, useDeviceDetect, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { likesAction } from './api';
import { translationStrings } from './likes.defaults';
import S from './likes.styles';
import { ILikesProps } from './likes.types';

export const Likes = ({ clientTypeId }: ILikesProps): JSX.Element => {
  const { user } = useUser();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);
  const { data, isLoading, mutate } = useMutation(likesAction);

  const isStartup = isStartupProfile(clientTypeId);

  useEffect(() => {
    // TODO - fix after likes done
    if (!user?.is_subscribed) {
      mutate();
    }
  }, [user?.is_subscribed]);

  // TODO - fix after likes done
  if (user?.is_subscribed) {
    return (
      <Empty
        actionButtonProps={{
          linkTo: ERoutes.DASHBOARD_PROFILE,
          label: translations.componentDashboardLikesNoSubscriptionActionButton,
        }}
        imageSrc="/images/undraw-stripe-payments.svg"
        label={translations.componentDashboardLikesNoSubscriptionLabel}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <Empty
        actionButtonProps={{
          label: isStartup
            ? translations.componentDashboardLikesEmptyActionButtonInvestor
            : translations.componentDashboardLikesEmptyActionButtonStartup,
          linkTo: ERoutes.DASHBOARD_DISCOVER,
        }}
        label={translations.componentDashboardLikesEmptyLabel}
      />
    );
  }

  return (
    <S.StyledWrapper>
      {data?.data.map((_record) => (
        <S.StyledImageWrapper key={_record.avatars[0]}>
          <Image
            alt={translations.commonDefaultImageAlt}
            height={600}
            layout="responsive"
            src={_record.avatars[0]}
            width={400}
          />
          <S.StyledTypography fontWeight={900} variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}>
            {_record.companyName}
          </S.StyledTypography>
        </S.StyledImageWrapper>
      ))}
    </S.StyledWrapper>
  );
};
