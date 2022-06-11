import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Modal, PairsImageGallery } from '@ui';

import { isStartupProfile, useConfirmationModal, useModal, useTranslation } from '@utils';

import { IMatch } from '@interfaces';

import { PAGINATION_LIMIT } from '@constants';

import { matchesAction, removeMatchAction } from './api';
import { translationStrings } from './matches.defaults';
import { IMatchesProps } from './matches.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

export const Matches = ({ clientTypeId, ...restProps }: IMatchesProps): JSX.Element => {
  const { confirm } = useConfirmationModal();
  const translations = useTranslation(translationStrings);

  const [items, setItems] = useState<IMatch[]>([]);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<IMatch>();

  const {
    hideModal: hideProfileDetailsPreviewModal,
    open: isProfileDetailsPreviewModalOpen,
    showModal: showProfileDetailsPreviewModal,
  } = useModal();

  useEffect(() => {
    if (selectedProfile) {
      showProfileDetailsPreviewModal();
    }
  }, [selectedProfile]);

  const { isLoading: isMatchesActionLoading, mutateAsync: mutateAsyncMatchesAction } =
    useMutation(matchesAction);

  const { isLoading: isRemoveMatchActionLoading, mutateAsync: mutateAsyncRemoveMatchAction } =
    useMutation(removeMatchAction);

  const isStartup = isStartupProfile(clientTypeId);

  const loadMore = (page: number) =>
    mutateAsyncMatchesAction({ limit: PAGINATION_LIMIT, offset: PAGINATION_LIMIT * page })
      .then(({ data: chunkOfMatches }) => {
        setItems((prev) => [...prev, ...chunkOfMatches]);
        setShouldLoadMore(chunkOfMatches.length === PAGINATION_LIMIT);
      })
      .catch(() => toast.error(translations.commonErrorsSomethingWentWrong));

  const onProfileDetailsPreviewModalContentCloseIconClick = () => {
    hideProfileDetailsPreviewModal();
    setSelectedProfile(undefined);
  };

  const handleRemoveMatchClick = () => {
    if (!selectedProfile) {
      return;
    }

    confirm({
      title: translations.commonPromptUnsavedTitle,
      cancellationText: translations.commonButtonsCancel,
      confirmationText: translations.commonButtonsDelete,
      confirmationButtonProps: {
        color: 'error',
      },
      description: translations.componentDashboardMatchesConfirmationModalDescription,
    }).then(() => {
      mutateAsyncRemoveMatchAction({ matchId: selectedProfile.matchId })
        .then(() => {
          setItems((prevItems) =>
            prevItems.filter((_prevItem) => _prevItem.matchId !== selectedProfile.matchId),
          );
          onProfileDetailsPreviewModalContentCloseIconClick();
          toast.success(translations.componentDashboardMatchesRemoveMatchSuccessNotification);
        })
        .catch(() => toast.error(translations.commonErrorsSomethingWentWrong));
    });
  };

  const emptyActionButtonLabel = isStartup
    ? translations.componentDashboardMatchesEmptyActionButtonInvestor
    : translations.componentDashboardMatchesEmptyActionButtonStartup;

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
          isLoading={isRemoveMatchActionLoading}
          selectedProfile={selectedProfile}
          onCloseIconClick={onProfileDetailsPreviewModalContentCloseIconClick}
          onRemoveMatchClick={handleRemoveMatchClick}
        />
      </Modal>
      <PairsImageGallery
        emptyActionButtonLabel={emptyActionButtonLabel}
        emptyLabel={translations.componentDashboardMatchesEmptyLabel}
        isLoading={isMatchesActionLoading}
        items={items}
        loadMore={loadMore}
        shouldLoadMore={shouldLoadMore}
        onRecordClick={setSelectedProfile}
      />
    </>
  );
};
