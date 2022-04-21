import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout } from '@ui';

import { getLikesAction } from './api';
import S from './likes.styles';

export const Likes = (): JSX.Element => {
  const { data, isLoading, mutate } = useMutation(getLikesAction);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return (
      <CenterBlockLayout>
        <Image
          alt="Tinvesta"
          height={200}
          objectFit="fill"
          src="/images/brandmark-loader.svg"
          width={200}
        />
      </CenterBlockLayout>
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
