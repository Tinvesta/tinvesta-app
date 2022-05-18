import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Empty, Loading } from '@ui';

import { isStartupProfile, useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { matchesAction } from './api';
import { translationStrings } from './matches.defaults';
import S from './matches.styles';
import { IMatchesProps } from './matches.types';

export const Matches = ({ clientTypeId }: IMatchesProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const { data, isLoading, mutate } = useMutation(matchesAction);

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
    </S.StyledWrapper>
  );
};
