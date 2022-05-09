import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Loading } from '@ui';

import { discoverRecordsAction, likeProfileAction } from './api';
import { MotionCardsStack } from './atoms';
import { Card } from './molecules';

export const Discover = (): JSX.Element => {
  const { mutateAsync } = useMutation(likeProfileAction);
  const { data, isLoading, mutate } = useMutation(discoverRecordsAction);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const onVote = (profileId: string, vote: boolean) => {
    console.log(data?.data.find((_profile) => _profile.id === profileId));

    mutateAsync({ profileId, vote }).then(() => mutate());
  };

  return (
    <CenterBlockLayout>
      <MotionCardsStack onVote={onVote}>
        {data?.data.map((_record) => <Card key={_record.id} record={_record} />) || []}
      </MotionCardsStack>
    </CenterBlockLayout>
  );
};
