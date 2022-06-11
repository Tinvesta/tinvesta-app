import { useTheme } from '@mui/material';
import { isToday } from 'date-fns';
import { rgba } from 'polished';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout, Empty, Loading, MatchModalContent, Modal } from '@ui';

import {
  isStartupProfile,
  replaceVariablesInTranslation,
  useModal,
  useTranslation,
  useUser,
} from '@utils';

import { likeProfileAction, supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import { IProfileDetails } from '@interfaces';

import { DISCOVER_LIKES_LIMIT, PAGINATION_LIMIT } from '@constants';

import { discoverRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import { translationStrings } from './discover.defaults';
import { IDiscoverProps } from './discover.types';
import { Card } from './molecules';

export const Discover = ({ clientTypeId, ...restProps }: IDiscoverProps): JSX.Element => {
  const { isLoading: isLikeProfileActionLoading, mutateAsync: mutateAsyncLikeProfileAction } =
    useMutation(likeProfileAction);

  const {
    isLoading: isDiscoverRecordsActionLoading,
    mutateAsync: mutateAsyncDiscoverRecordsAction,
  } = useMutation(discoverRecordsAction);

  const [reachedLimit, setReachedLimit] = useState(false);
  const [items, setItems] = useState<IProfileDetails[]>([]);
  const [isProfilePreviewMode, setIsProfilePreviewMode] = useState(false);
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const theme = useTheme();
  const { user } = useUser();
  const {
    hideModal: hideMatchModal,
    open: isMatchModalOpen,
    showModal: showMatchModal,
  } = useModal();
  const translations = useTranslation(translationStrings);

  const isStartup = isStartupProfile(clientTypeId);

  const loadMore = () =>
    mutateAsyncDiscoverRecordsAction({ offset: 0, limit: PAGINATION_LIMIT }).then(
      ({ data: chunkOfRecords }) => {
        const reversedChunkOfRecords = chunkOfRecords.reverse();

        setItems((prevItems) => {
          const newRecords = reversedChunkOfRecords.reduce<IProfileDetails[]>(
            (_accumulator, _value) => {
              const isAlreadyInItemsArray = prevItems.find((_item) => _item.id === _value.id);

              return isAlreadyInItemsArray ? _accumulator : [..._accumulator, _value];
            },
            [],
          );

          return [...newRecords, ...prevItems];
        });
      },
    );

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    if (likedProfileDetails) {
      showMatchModal();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  useEffect(() => {
    if (!user || isMatchModalOpen) {
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

  if (
    (isDiscoverRecordsActionLoading && items.length === 0) ||
    (isLikeProfileActionLoading && items.length === 1)
  ) {
    return <Loading />;
  }

  if (reachedLimit && !isMatchModalOpen) {
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

  if (items.length === 0 && !isMatchModalOpen) {
    const emptyLabel = isStartup
      ? translations.componentDashboardDiscoverNoMoreRecordsLabelStartup
      : translations.componentDashboardDiscoverNoMoreRecordsLabelInvestor;

    return <Empty label={emptyLabel} />;
  }

  const onVote = (profileId: string, vote: boolean) => {
    setIsProfilePreviewMode(false);

    mutateAsyncLikeProfileAction({ profileId, vote }).then(({ data }) => {
      if (!loggedProfileDetails && data.loggedProfileDetails) {
        setLoggedProfileDetails(data.loggedProfileDetails);
      }

      setLikedProfileDetails(data.likedProfileDetails);

      const newItems = [...items].filter((_item) => _item.id !== profileId);

      setItems(newItems);

      if (newItems.length === Math.ceil(PAGINATION_LIMIT / 2)) {
        loadMore();
      }
    });
  };

  const onModalClose = () => {
    hideMatchModal();
    setLikedProfileDetails(undefined);
  };

  const enableProfilePreviewMode = () => setIsProfilePreviewMode(true);

  return (
    <>
      <Modal
        alwaysFullWidth={true}
        backgroundStyles={{
          height: '100%',
          backdropFilter: 'blur(10px)',
          backgroundColor: rgba(theme.palette.primary.main, 0.5),
        }}
        open={isMatchModalOpen}
        withBorderRadius={false}
        withCloseIcon={false}
        onClose={onModalClose}
      >
        <MatchModalContent
          likedProfileDetails={likedProfileDetails}
          loggedProfileDetails={loggedProfileDetails}
          onClose={onModalClose}
        />
      </Modal>
      <CenterBlockLayout>
        <MotionCardsStack
          drag={!isLikeProfileActionLoading}
          isLoading={isDiscoverRecordsActionLoading}
          isProfilePreviewMode={isProfilePreviewMode}
          onVote={onVote}
        >
          {items.map((_item) => (
            <Card
              key={_item.id}
              enableProfilePreviewMode={enableProfilePreviewMode}
              record={_item}
              {...restProps}
            />
          )) || []}
        </MotionCardsStack>
      </CenterBlockLayout>
    </>
  );
};
