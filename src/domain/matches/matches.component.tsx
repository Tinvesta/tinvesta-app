import Image from 'next/image';
import { useState } from 'react';
import { useMutation } from 'react-query';

import { InfinityScrollImageGallery, Empty, Loading } from '@ui';

import { isStartupProfile, useDeviceDetect, useDidMountEffect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { IPair } from '@interfaces';

import { matchesAction } from './api';
import { translationStrings } from './matches.defaults';
import S from './matches.styles';
import { IMatchesProps } from './matches.types';

const LIMIT = 30;

export const Matches = ({ clientTypeId }: IMatchesProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
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

  useDidMountEffect(() => {
    loadMore(0);
  }, []);

  if (isMatchesActionLoading && items.length === 0) {
    return <Loading />;
  }

  if (items.length === 0) {
    return (
      <Empty
        actionButtonProps={{
          label: isStartup
            ? translations.componentDashboardMatchesEmptyActionButtonInvestor
            : translations.componentDashboardMatchesEmptyActionButtonStartup,
          linkTo: ERoutes.DASHBOARD_DISCOVER,
        }}
        label={translations.componentDashboardMatchesEmptyLabel}
      />
    );
  }

  return (
    <InfinityScrollImageGallery
      initialPage={1}
      isLoading={isMatchesActionLoading}
      loadMore={loadMore}
      shouldLoadMore={shouldLoadMore}
    >
      <S.StyledGridWrapper>
        {items.map((_record) => (
          <S.StyledImageWrapper key={_record.avatars[0]}>
            <Image
              alt={translations.commonDefaultImageAlt}
              height={600}
              layout="responsive"
              src={_record.avatars[0]}
              width={400}
            />
            <S.StyledTypography fontWeight={900} variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}>
              {_record.companyName}
            </S.StyledTypography>
          </S.StyledImageWrapper>
        ))}
      </S.StyledGridWrapper>
    </InfinityScrollImageGallery>
  );
};
