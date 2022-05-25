import { isToday } from 'date-fns';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Empty, Loading, MatchModalContent, useModal } from '@ui';

import { replaceVariablesInTranslation, useTranslation, useUser } from '@utils';

import { likeProfileAction, supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import { IProfileDetails } from '@interfaces';

import { DISCOVER_LIKES_LIMIT } from '@constants';

import { discoverRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import { translationStrings } from './discover.defaults';
import { IDiscoverProps } from './discover.types';
import { Card } from './molecules';

export const Discover = (props: IDiscoverProps): JSX.Element => {
  const { mutateAsync } = useMutation(likeProfileAction);
  const { data, isLoading, mutate } = useMutation(discoverRecordsAction);

  const [reachedLimit, setReachedLimit] = useState(false);
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const { user } = useUser();
  const translations = useTranslation(translationStrings);
  const { hide, isOpen, Modal, show } = useModal({ withCloseIcon: false });

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (likedProfileDetails) {
      show();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  useEffect(() => {
    if (!user || isOpen) {
      return;
    }

    if (user.is_subscribed) {
      setReachedLimit(false);
    }

    if (user.likes_counter?.count) {
      setReachedLimit(user.likes_counter.count >= DISCOVER_LIKES_LIMIT);
    }

    if (!user.is_subscribed) {
      const subscription = supabaseInstance
        .from(`likes_counter:profile_id=eq.${user.id}`)
        .on('UPDATE', (payload) => {
          const likesCounterDate = new Date(payload.new.created_at);

          if (isToday(likesCounterDate)) {
            setReachedLimit(payload.new.count >= DISCOVER_LIKES_LIMIT);
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

  if (reachedLimit && !isOpen) {
    return (
      <Empty
        actionButtonProps={{
          linkTo: ERoutes.DASHBOARD_PROFILE,
          label: translations.componentDashboardDiscoverLikesLimitActionButton,
        }}
        imageSrc="/images/undraw-stripe-payments.svg"
        label={replaceVariablesInTranslation(
          translations.componentDashboardDiscoverLikesLimitLabel,
          DISCOVER_LIKES_LIMIT,
        )}
      />
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
