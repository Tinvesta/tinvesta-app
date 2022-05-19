import { useState } from 'react';
import { useMutation } from 'react-query';

import { PairsImageGallery } from '@ui';

import { isStartupProfile, useTranslation } from '@utils';

import { IPair } from '@interfaces';

import { matchesAction } from './api';
import { translationStrings } from './matches.defaults';
import { IMatchesProps } from './matches.types';

const LIMIT = 30;

export const Matches = ({ clientTypeId }: IMatchesProps): JSX.Element => {
  const [items, setItems] = useState<IPair[]>([]);
  const translations = useTranslation(translationStrings);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);

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

  const emptyActionButtonLabel = isStartup
    ? translations.componentDashboardMatchesEmptyActionButtonInvestor
    : translations.componentDashboardMatchesEmptyActionButtonStartup;

  return (
    <PairsImageGallery
      emptyActionButtonLabel={emptyActionButtonLabel}
      emptyLabel={translations.componentDashboardMatchesEmptyLabel}
      isLoading={isMatchesActionLoading}
      items={items}
      loadMore={loadMore}
      shouldLoadMore={shouldLoadMore}
    />
  );
};
