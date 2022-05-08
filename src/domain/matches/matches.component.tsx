import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Loading } from '@ui';

import { getMatchesAction } from './api';
import S from './matches.styles';

export const Matches = (): JSX.Element => {
  const { data, isLoading, mutate } = useMutation(getMatchesAction);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.StyledWrapper>
      {data?.data.map((_record) => (
        <div key={_record.avatarPublicUrl} style={{ width: '100%' }}>
          <Image
            alt="Match profile"
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
