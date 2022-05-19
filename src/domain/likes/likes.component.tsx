import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

// TODO - refactor later
import { MatchModalContent } from '@domain/discover/molecules';

import { Empty, PairsImageGallery, useModal } from '@ui';

import { isStartupProfile, useTranslation, useUser } from '@utils';

import { likeProfileAction } from '@infrastructure';

import { ERoutes } from '@enums';

import { IPair, IProfileDetails } from '@interfaces';

import { likesAction } from './api';
import { translationStrings } from './likes.defaults';
import { ILikesProps } from './likes.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

const LIMIT = 30;

export const Likes = ({ clientTypeId, ...restProps }: ILikesProps): JSX.Element => {
  const { user } = useUser();
  const [items, setItems] = useState<IPair[]>([]);
  const translations = useTranslation(translationStrings);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);

  const {
    hide: hideProfileDetailsPreviewModalContent,
    Modal: ModalProfileDetailsPreviewModalContent,
    show: showProfileDetailsPreviewModalContent,
  } = useModal({
    withCloseIcon: false,
    withPadding: false,
    align: 'right',
    withBorderRadius: false,
  });
  const {
    hide: hideMatchModalContent,
    Modal: ModalMatchModalContent,
    show: showMatchModalContent,
  } = useModal({ withCloseIcon: false });

  const { isLoading: isLikesActionLoading, mutateAsync: mutateAsyncLikesAction } =
    useMutation(likesAction);

  const [selectedProfile, setSelectedProfile] = useState<IPair>();
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const { mutateAsync: mutateAsyncLikeProfileAction } = useMutation(likeProfileAction);

  const isStartup = isStartupProfile(clientTypeId);

  const loadMore = (page: number) =>
    mutateAsyncLikesAction({ limit: LIMIT, offset: LIMIT * page }).then(
      ({ data: chunkOfLikes }) => {
        setItems((prev) => [...prev, ...chunkOfLikes]);
        setShouldLoadMore(chunkOfLikes.length === LIMIT);
      },
    );

  useEffect(() => {
    if (selectedProfile) {
      showProfileDetailsPreviewModalContent();
    }
  }, [selectedProfile]);

  useEffect(() => {
    if (likedProfileDetails) {
      hideProfileDetailsPreviewModalContent();
      showMatchModalContent();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  const onProfileDetailsPreviewModalContentCloseIconClick = () => {
    hideProfileDetailsPreviewModalContent();
    setSelectedProfile(undefined);
  };

  const onModalMatchModalContentClose = () => {
    // TODO - add reset function
    // mutate();

    hideMatchModalContent();
    setLikedProfileDetails(undefined);
  };

  const onVote = (profileId: string, vote: boolean) => {
    mutateAsyncLikeProfileAction({ profileId, vote }).then(({ data }) => {
      if (!loggedProfileDetails && data.loggedProfileDetails) {
        setLoggedProfileDetails(data.loggedProfileDetails);
      }

      setLikedProfileDetails(data.likedProfileDetails);
    });
  };

  if (!user?.is_subscribed) {
    return (
      <Empty
        actionButtonProps={{
          linkTo: ERoutes.DASHBOARD_PROFILE,
          label: translations.componentDashboardLikesNoSubscriptionActionButton,
        }}
        imageSrc="/images/undraw-stripe-payments.svg"
        label={translations.componentDashboardLikesNoSubscriptionLabel}
      />
    );
  }

  const emptyActionButtonLabel = isStartup
    ? translations.componentDashboardLikesEmptyActionButtonInvestor
    : translations.componentDashboardLikesEmptyActionButtonStartup;

  return (
    <>
      <ModalProfileDetailsPreviewModalContent>
        <ProfileDetailsPreviewModalContent
          {...restProps}
          selectedProfile={selectedProfile}
          onCloseIconClick={onProfileDetailsPreviewModalContentCloseIconClick}
          onVote={onVote}
        />
      </ModalProfileDetailsPreviewModalContent>
      <ModalMatchModalContent onClose={onModalMatchModalContentClose}>
        <MatchModalContent
          likedProfileDetails={likedProfileDetails}
          loggedProfileDetails={loggedProfileDetails}
          onClose={onModalMatchModalContentClose}
        />
      </ModalMatchModalContent>
      <PairsImageGallery
        emptyActionButtonLabel={emptyActionButtonLabel}
        emptyLabel={translations.componentDashboardLikesEmptyLabel}
        isLoading={isLikesActionLoading}
        items={items}
        loadMore={loadMore}
        shouldLoadMore={shouldLoadMore}
        onRecordClick={setSelectedProfile}
      />
    </>
  );
};
