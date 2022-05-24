import { isToday } from 'date-fns';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Loading, MatchModalContent, useModal } from '@ui';

import { useUser } from '@utils';

import { likeProfileAction, supabaseInstance } from '@infrastructure';

import { IProfileDetails } from '@interfaces';

import { discoverRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import { IDiscoverProps } from './discover.types';
import { Card } from './molecules';

export const Discover = (props: IDiscoverProps): JSX.Element => {
  const { mutateAsync } = useMutation(likeProfileAction);
  const { data, isLoading, mutate } = useMutation(discoverRecordsAction);

  const [reachedLimit, setReachedLimit] = useState(false);
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const { user } = useUser();
  const { hide, Modal, show } = useModal({ withCloseIcon: false });

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (likedProfileDetails) {
      show();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  useEffect(() => {
    if (!user) {
      return;
    }

    if (user.is_subscribed) {
      setReachedLimit(false);
    }

    if (user.initial_likes_counter?.count) {
      setReachedLimit(user.initial_likes_counter.count >= 5);
    }

    if (!user.is_subscribed) {
      const subscription = supabaseInstance
        .from(`likes_counter:profile_id=eq.${user.id}`)
        .on('UPDATE', (payload) => {
          const likesCounterDate = new Date(payload.new.created_at);

          if (isToday(likesCounterDate)) {
            setReachedLimit(payload.new.count >= 5);
          }
        })
        .subscribe();

      return () => {
        supabaseInstance.removeSubscription(subscription);
      };
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  if (reachedLimit) {
    return (
      <div>
        <CenterBlockLayout>
          <h1>You have reached the limit of likes</h1>
        </CenterBlockLayout>
      </div>
    );
  }

  const onVote = (profileId: string, vote: boolean) => {
    mutateAsync({ profileId, vote }).then(({ data }) => {
      if (!loggedProfileDetails && data.loggedProfileDetails) {
        setLoggedProfileDetails(data.loggedProfileDetails);
      }

      setLikedProfileDetails(data.likedProfileDetails);

      // TODO - remove later after testing
      mutate();
    });
  };

  const onModalClose = () => {
    hide();
    setLikedProfileDetails(undefined);
  };

  return (
    <>
      <Modal onClose={onModalClose}>
        <MatchModalContent
          likedProfileDetails={likedProfileDetails}
          loggedProfileDetails={loggedProfileDetails}
          onClose={onModalClose}
        />
      </Modal>
      <CenterBlockLayout>
        <MotionCardsStack onVote={onVote}>
          {data?.data.map((_record) => <Card key={_record.id} record={_record} {...props} />) || []}
        </MotionCardsStack>
      </CenterBlockLayout>
    </>
  );
};
