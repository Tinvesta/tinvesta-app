import { useTheme } from '@mui/material';
import { rgba } from 'polished';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Empty, MatchModalContent, Modal, PairsImageGallery } from '@ui';

import { isStartupProfile, useConfirmationModal, useModal, useTranslation, useUser } from '@utils';

import { likeProfileAction } from '@infrastructure';

import { ERoutes } from '@enums';

import { ILike, IProfileDetails } from '@interfaces';

import { PAGINATION_LIMIT } from '@constants';

import { likesAction } from './api';
import { translationStrings } from './likes.defaults';
import { ILikesProps } from './likes.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

export const Likes = ({ clientTypeId, ...restProps }: ILikesProps): JSX.Element => {
  const theme = useTheme();
  const { user } = useUser();
  const { confirm } = useConfirmationModal();
  const translations = useTranslation(translationStrings);

  const [items, setItems] = useState<ILike[]>([]);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);

  const {
    hideModal: hideProfileDetailsPreviewModal,
    open: isProfileDetailsPreviewModalOpen,
    showModal: showProfileDetailsPreviewModal,
  } = useModal();

  const {
    hideModal: hideMatchModal,
    open: isMatchModalOpen,
    showModal: showMatchModal,
  } = useModal();

  const { isLoading: isLikesActionLoading, mutateAsync: mutateAsyncLikesAction } =
    useMutation(likesAction);

  const [selectedProfile, setSelectedProfile] = useState<ILike>();
  const [likedProfileDetails, setLikedProfileDetails] = useState<IProfileDetails>();
  const [loggedProfileDetails, setLoggedProfileDetails] = useState<IProfileDetails>();

  const { mutateAsync: mutateAsyncLikeProfileAction } = useMutation(likeProfileAction);

  const isStartup = isStartupProfile(clientTypeId);

  const loadMore = (page: number) =>
    mutateAsyncLikesAction({ limit: PAGINATION_LIMIT, offset: PAGINATION_LIMIT * page }).then(
      ({ data: chunkOfLikes }) => {
        setItems((prev) => [...prev, ...chunkOfLikes]);
        setShouldLoadMore(chunkOfLikes.length === PAGINATION_LIMIT);
      },
    );

  useEffect(() => {
    if (selectedProfile) {
      showProfileDetailsPreviewModal();
    }
  }, [selectedProfile]);

  useEffect(() => {
    if (likedProfileDetails) {
      hideProfileDetailsPreviewModal();
      showMatchModal();
    }
  }, [JSON.stringify(likedProfileDetails)]);

  const onProfileDetailsPreviewModalContentCloseIconClick = () => {
    hideProfileDetailsPreviewModal();
    setSelectedProfile(undefined);
  };

  const onModalMatchModalContentClose = () => {
    setItems((prevItems) =>
      prevItems.filter((_prevItem) => _prevItem.likeId !== selectedProfile?.likeId),
    );

    hideMatchModal();
    setLikedProfileDetails(undefined);
  };

  const onVote = async (profile: ILike, vote: boolean) => {
    const conditionalPromise = vote
      ? Promise.resolve()
      : confirm({
          title: translations.commonPromptUnsavedTitle,
          cancellationText: translations.commonButtonsCancel,
          confirmationText: translations.commonButtonsDelete,
          confirmationButtonProps: {
            color: 'error',
          },
          description: translations.componentDashboardLikesConfirmationModalDescription,
        });

    conditionalPromise.then(() =>
      mutateAsyncLikeProfileAction({ profileId: profile.id, vote })
        .then(({ data }) => {
          if (!loggedProfileDetails && data.loggedProfileDetails) {
            setLoggedProfileDetails(data.loggedProfileDetails);
          }

          if (!data.likedProfileDetails) {
            setItems((prevItems) =>
              prevItems.filter((_prevItem) => _prevItem.likeId !== selectedProfile?.likeId),
            );
            onProfileDetailsPreviewModalContentCloseIconClick();
            toast.success(translations.componentDashboardLikesRemoveLikeSuccessNotification);
          }

          setLikedProfileDetails(data.likedProfileDetails);
        })
        .catch(() => toast.error(translations.commonErrorsSomethingWentWrong)),
    );
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
      <Modal
        align="right"
        backgroundStyles={{
          height: '100%',
        }}
        open={isProfileDetailsPreviewModalOpen}
        withBorderRadius={false}
        withCloseIcon={false}
        withPadding={false}
        onClose={onProfileDetailsPreviewModalContentCloseIconClick}
      >
        <ProfileDetailsPreviewModalContent
          {...restProps}
          selectedProfile={selectedProfile}
          onCloseIconClick={onProfileDetailsPreviewModalContentCloseIconClick}
          onVote={onVote}
        />
      </Modal>
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
        onClose={onModalMatchModalContentClose}
      >
        <MatchModalContent
          closeButtonLabel={translations.componentDashboardLikesMatchModalCloseButton}
          likedProfileDetails={likedProfileDetails}
          loggedProfileDetails={loggedProfileDetails}
          onClose={onModalMatchModalContentClose}
        />
      </Modal>
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
