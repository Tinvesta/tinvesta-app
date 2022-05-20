import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { PairsImageGallery, useModal } from '@ui';

import { isStartupProfile, useConfirmationModal, useTranslation } from '@utils';

import { IMatch } from '@interfaces';

import { matchesAction, removeMatchAction } from './api';
import { translationStrings } from './matches.defaults';
import { IMatchesProps } from './matches.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

const LIMIT = 30;

export const Matches = ({ clientTypeId, ...restProps }: IMatchesProps): JSX.Element => {
  const { confirm } = useConfirmationModal();
  const translations = useTranslation(translationStrings);

  const [items, setItems] = useState<IMatch[]>([]);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<IMatch>();

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

  useEffect(() => {
    if (selectedProfile) {
      showProfileDetailsPreviewModalContent();
    }
  }, [selectedProfile]);

  const { isLoading: isMatchesActionLoading, mutateAsync: mutateAsyncMatchesAction } =
    useMutation(matchesAction);

  const { isLoading: isRemoveMatchActionLoading, mutateAsync: mutateAsyncRemoveMatchAction } =
    useMutation(removeMatchAction);

  const isStartup = isStartupProfile(clientTypeId);

  const loadMore = (page: number) =>
    mutateAsyncMatchesAction({ limit: LIMIT, offset: LIMIT * page }).then(
      ({ data: chunkOfMatches }) => {
        setItems((prev) => [...prev, ...chunkOfMatches]);
        setShouldLoadMore(chunkOfMatches.length === LIMIT);
      },
    );

  const onProfileDetailsPreviewModalContentCloseIconClick = () => {
    hideProfileDetailsPreviewModalContent();
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
      mutateAsyncRemoveMatchAction({ matchId: selectedProfile.matchId }).then(() => {
        onProfileDetailsPreviewModalContentCloseIconClick();

        setItems([]);
        loadMore(0);
      });
    });
  };

  const emptyActionButtonLabel = isStartup
    ? translations.componentDashboardMatchesEmptyActionButtonInvestor
    : translations.componentDashboardMatchesEmptyActionButtonStartup;

  return (
    <>
      <ModalProfileDetailsPreviewModalContent
        onClose={onProfileDetailsPreviewModalContentCloseIconClick}
      >
        <ProfileDetailsPreviewModalContent
          {...restProps}
          isLoading={isRemoveMatchActionLoading}
          selectedProfile={selectedProfile}
          onCloseIconClick={onProfileDetailsPreviewModalContentCloseIconClick}
          onRemoveMatchClick={handleRemoveMatchClick}
        />
      </ModalProfileDetailsPreviewModalContent>
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
