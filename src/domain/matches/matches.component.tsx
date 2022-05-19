import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { PairsImageGallery, useModal } from '@ui';

import { isStartupProfile, useTranslation } from '@utils';

import { IPair } from '@interfaces';

import { matchesAction } from './api';
import { translationStrings } from './matches.defaults';
import { IMatchesProps } from './matches.types';
import { ProfileDetailsPreviewModalContent } from './molecules';

const LIMIT = 30;

export const Matches = ({ clientTypeId, ...restProps }: IMatchesProps): JSX.Element => {
  const [items, setItems] = useState<IPair[]>([]);
  const translations = useTranslation(translationStrings);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<IPair>();

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

  const emptyActionButtonLabel = isStartup
    ? translations.componentDashboardMatchesEmptyActionButtonInvestor
    : translations.componentDashboardMatchesEmptyActionButtonStartup;

  return (
    <>
      <ModalProfileDetailsPreviewModalContent>
        <ProfileDetailsPreviewModalContent
          {...restProps}
          selectedProfile={selectedProfile}
          onCloseIconClick={onProfileDetailsPreviewModalContentCloseIconClick}
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
