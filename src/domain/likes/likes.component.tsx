import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Empty, MatchModalContent, PairsImageGallery, useModal } from '@ui';

import { isStartupProfile, useConfirmationModal, useTranslation, useUser } from '@utils';

import { likeProfileAction } from '@infrastructure';

import { ERoutes } from '@enums';

import { ILike, IProfileDetails } from '@interfaces';

import { likesAction } from './api';
import { translationStrings } from './likes.defaults';
import { ILikesProps } from './likes.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

const LIMIT = 20;

export const Likes = ({ clientTypeId, ...restProps }: ILikesProps): JSX.Element => {
  const { user } = useUser();
  const { confirm } = useConfirmationModal();
  const translations = useTranslation(translationStrings);

  const [items, setItems] = useState<ILike[]>([]);
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

  const [selectedProfile, setSelectedProfile] = useState<ILike>();
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
    setItems((prevItems) =>
      prevItems.filter((_prevItem) => _prevItem.likeId !== selectedProfile?.likeId),
    );

    hideMatchModalContent();
    setLikedProfileDetails(undefined);
  };

  const onVote = async (profile: ILike, vote: boolean) => {
    const conditionalPromise = !vote
      ? confirm({
          title: translations.commonPromptUnsavedTitle,
          cancellationText: translations.commonButtonsCancel,
          confirmationText: translations.commonButtonsDelete,
          confirmationButtonProps: {
            color: 'error',
          },
          description: translations.componentDashboardLikesConfirmationModalDescription,
        })
      : Promise.resolve();

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
      <ModalProfileDetailsPreviewModalContent
        onClose={onProfileDetailsPreviewModalContentCloseIconClick}
      >
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
