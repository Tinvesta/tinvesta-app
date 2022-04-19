import Image from 'next/image';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { CenterBlockLayout } from '@ui';

import { getRecordsAction } from './api';
import { MotionCardsStack } from './atoms';
import S from './discover.styles';

export const Discover = (): JSX.Element => {
  const { isLoading, mutate } = useMutation(getRecordsAction);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return (
      <CenterBlockLayout>
        <Image
          alt="Tinvesta"
          height={200}
          objectFit="fill"
          src="/images/brandmark-loader.svg"
          width={200}
        />
      </CenterBlockLayout>
    );
  }

  return (
    <CenterBlockLayout>
      <MotionCardsStack>
        <S.StyledImageWrapper data-value="waffles">🧇</S.StyledImageWrapper>
        <S.StyledImageWrapper data-value="pancakes">🥞</S.StyledImageWrapper>
        <S.StyledImageWrapper data-value="donuts">🍩</S.StyledImageWrapper>
      </MotionCardsStack>
    </CenterBlockLayout>
  );
};
