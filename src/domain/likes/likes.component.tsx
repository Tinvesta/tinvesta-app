import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Empty, Loading } from '@ui';

import { ERoutes } from '@enums';

import { getLikesAction } from './api';
import S from './likes.styles';

export const Likes = (): JSX.Element => {
  const { data, isLoading, mutate } = useMutation(getLikesAction);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <Empty
        actionButtonProps={{
          label: 'Discover New Startups / Investors',
          linkTo: ERoutes.DASHBOARD_DISCOVER,
        }}
        label="You have no likes yet"
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
