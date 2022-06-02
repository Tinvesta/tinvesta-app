import { useTheme } from '@mui/material';
import { isToday } from 'date-fns';
import { rgba } from 'polished';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Empty, Loading, MatchModalContent, useModal } from '@ui';

import { isStartupProfile, replaceVariablesInTranslation, useTranslation, useUser } from '@utils';

import { likeProfileAction, supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import { IProfileDetails } from '@interfaces';

import { DISCOVER_LIKES_LIMIT } from '@constants';

import { discoverRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import { translationStrings } from './discover.defaults';
import { IDiscoverProps } from './discover.types';
import { Card } from './molecules';

export const Discover = ({ clientTypeId, ...restProps }: IDiscoverProps): JSX.Element => {
  const { isLoading: isLikeProfileActionLoading, mutateAsync: mutateAsyncLikeProfileAction } =
    useMutation(likeProfileAction);

  const {
    data: discoverRecordsActionData,
    isLoading: isDiscoverRecordsActionLoading,
    mutate: mutateDiscoverRecordsAction,
  } = useMutation(discoverRecordsAction);

  const [drag, setDrag] = useState(true);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const theme = useTheme();
  const { user } = useUser();
  const translations = useTranslation(translationStrings);

  const { hide, isOpen, Modal, show } = useModal({
    withCloseIcon: false,
    alwaysFullWidth: true,
    withBorderRadius: false,
    backgroundStyles: {
      backdropFilter: 'blur(10px)',
      backgroundColor: rgba(theme.palette.primary.main, 0.5),
    },
  });

  const isStartup = isStartupProfile(clientTypeId);

  useEffect(() => {
    mutateDiscoverRecordsAction();
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

  if (isDiscoverRecordsActionLoading) {
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

  if (!discoverRecordsActionData?.data || discoverRecordsActionData?.data.length === 0) {
    const emptyLabel = isStartup
      ? translations.componentDashboardDiscoverNoMoreRecordsLabelStartup
      : translations.componentDashboardDiscoverNoMoreRecordsLabelInvestor;

    return <Empty label={emptyLabel} />;
  }

  const onVote = (profileId: string, vote: boolean) => {
    mutateAsyncLikeProfileAction({ profileId, vote }).then(({ data }) => {
      if (!loggedProfileDetails && data.loggedProfileDetails) {
        setLoggedProfileDetails(data.loggedProfileDetails);
      }

      setLikedProfileDetails(data.likedProfileDetails);

      // TODO - remove later
      mutateDiscoverRecordsAction();
    });
  };

  const onModalClose = () => {
    hide();
    setLikedProfileDetails(undefined);
  };

  const disableDrag = () => setDrag(false);

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
        <MotionCardsStack drag={!isLikeProfileActionLoading && drag} onVote={onVote}>
          {discoverRecordsActionData?.data.map((_record) => (
            <Card key={_record.id} disableDrag={disableDrag} record={_record} {...restProps} />
          )) || []}
        </MotionCardsStack>
      </CenterBlockLayout>
    </>
  );
};
