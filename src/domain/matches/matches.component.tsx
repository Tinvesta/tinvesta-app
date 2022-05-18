import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { Empty, Loading } from '@ui';

import { isStartupProfile, useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { IPair } from '@interfaces';

import { matchesAction } from './api';
import { translationStrings } from './matches.defaults';
import S from './matches.styles';
import { IMatchesProps } from './matches.types';

const LIMIT = 30;

export const Matches = ({ clientTypeId }: IMatchesProps): JSX.Element => {
  const [page, setPage] = useState(1);
  const { deviceData } = useDeviceDetect();
  const [items, setItems] = useState<IPair[]>([]);
  const translations = useTranslation(translationStrings);
  const [shouldLoadMore, setShouldLoadMore] = useState(false);

  const { isLoading: isMatchesActionLoading, mutateAsync: mutateAsyncMatchesAction } =
    useMutation(matchesAction);

  const isStartup = isStartupProfile(clientTypeId);

  useEffect(() => {
    mutateAsyncMatchesAction({ limit: LIMIT, offset: 0 }).then((result) =>
      setItems([...result.data]),
    );
  }, []);

  const handleScroll = (event: Event) => {
    if (!event.target || shouldLoadMore || isMatchesActionLoading) {
      return;
    }

    // @ts-expect-error
    const { scrollHeight, scrollTop } = event.target;
    const currentHeight = Math.ceil(scrollTop + window.innerHeight);

    if (currentHeight + 500 >= scrollHeight) {
      setShouldLoadMore(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.addEventListener('scroll', handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (shouldLoadMore) {
      mutateAsyncMatchesAction({ limit: LIMIT, offset: LIMIT * page }).then((result) => {
        setItems((prev) => [...prev, ...result.data]);
        setPage((prev) => prev + 1);
        setShouldLoadMore(false);
      });
    }
  }, [shouldLoadMore]);

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
    <S.StyledWrapper>
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
      {isMatchesActionLoading && <Loading />}
    </S.StyledWrapper>
  );
};
