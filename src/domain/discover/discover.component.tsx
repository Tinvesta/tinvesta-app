import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout } from '@ui';

import { getRecordsAction, likeProfileAction } from './api';
import { MotionCardsStack } from './atoms';
import { Card } from './molecules';

export const Discover = (): JSX.Element => {
  const { data, isLoading, mutate } = useMutation(getRecordsAction);
  const { mutateAsync } = useMutation(likeProfileAction);

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

  const onVote = (profileId: string, vote: boolean) => {
    mutateAsync({ profileId, vote });
  };

  return (
    <CenterBlockLayout>
      <MotionCardsStack onVote={onVote}>
        {data?.data.map((_record) => <Card key={_record.id} record={_record} />) || []}
      </MotionCardsStack>
    </CenterBlockLayout>
  );
};
