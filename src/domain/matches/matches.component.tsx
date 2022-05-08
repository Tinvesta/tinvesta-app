import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Empty, Loading } from '@ui';

import { isStartupProfile, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { getMatchesAction } from './api';
import { translationStrings } from './matches.defaults';
import S from './matches.styles';
import { IMatchesProps } from './matches.types';

export const Matches = ({ clientTypeId }: IMatchesProps): JSX.Element => {
  const translations = useTranslation(translationStrings);
  const { data, isLoading, mutate } = useMutation(getMatchesAction);

  const isStartup = isStartupProfile(clientTypeId);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data || data.data.length === 0) {
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
      {data?.data.map((_record) => (
        <div key={_record.avatarPublicUrl} style={{ width: '100%' }}>
          <Image
            alt="Match profile"
            height={600}
            layout="responsive"
            src={_record.avatarPublicUrl}
            width={400}
          />
        </div>
      ))}
    </S.StyledWrapper>
  );
};
