import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout } from '@ui';

import { getRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import S from './discover.styles';

export const Discover = (): JSX.Element => {
  const { data, isLoading, mutate } = useMutation(getRecordsAction);

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
    <CenterBlockLayout>
      <MotionCardsStack>
        {data?.data.map((_record) => (
          <S.StyledImageWrapper key={_record.avatars.avatarPublicUrl}>
            <Image
              alt="Profile image"
              height={600}
              src={_record.avatars.avatarPublicUrl}
              width={400}
            />
          </S.StyledImageWrapper>
        ))}
      </MotionCardsStack>
    </CenterBlockLayout>
  );
};
