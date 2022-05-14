import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Empty, Loading } from '@ui';

import { isStartupProfile, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { getLikesAction } from './api';
import { translationStrings } from './likes.defaults';
import S from './likes.styles';
import { ILikesProps } from './likes.types';

export const Likes = ({ clientTypeId }: ILikesProps): JSX.Element => {
  const { user } = useUser();
  const translations = useTranslation(translationStrings);
  const { data, isLoading, mutate } = useMutation(getLikesAction);

  const isStartup = isStartupProfile(clientTypeId);

  useEffect(() => {
    if (user?.is_subscribed) {
      mutate();
    }
  }, [user?.is_subscribed]);

  if (!user?.is_subscribed) {
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
        <div key={_record.avatarPublicUrl} style={{ width: '100%' }}>
          <Image
            alt="Like profile"
            height={600}
            layout="responsive"
            src={_record.avatarPublicUrl}
            width={400}
          />
        </div>
      ))}
    </S.StyledWrapper>
  );
};
