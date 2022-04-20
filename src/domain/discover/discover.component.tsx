import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout } from '@ui';

import { getRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import { Card } from './molecules';

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
          <Card key={_record.id} record={_record} />
        ))}
      </MotionCardsStack>
    </CenterBlockLayout>
  );
};
