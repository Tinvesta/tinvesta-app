import Image from 'next/image';
import { Children, useEffect } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import { InfinityScrollImageGallery, Empty, Loading } from '@ui';

import { profileFirstNameAndLastNameToFullName, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { IPair } from '@interfaces';

import { translationStrings } from './pairs-image-gallery.defaults';
import S from './pairs-image-gallery.styles';
import { IPairsImageGalleryProps } from './pairs-image-gallery.types';

export const PairsImageGallery = <TItem extends IPair>({
  emptyActionButtonLabel,
  emptyLabel,
  isLoading,
  items,
  loadMore,
  onRecordClick,
  shouldLoadMore,
}: IPairsImageGalleryProps<TItem>): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  useEffect(() => {
    loadMore(0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && items.length === 0) {
    return (
      <Empty
        actionButtonProps={{
          label: emptyActionButtonLabel,
          linkTo: ERoutes.DASHBOARD_DISCOVER,
        }}
        label={emptyLabel}
      />
    );
  }

  const handleRecordClick = (record: TItem) => () => onRecordClick(record);

  return (
    <InfinityScrollImageGallery
      initialPage={1}
      isLoading={isLoading}
      loadMore={loadMore}
      shouldLoadMore={shouldLoadMore}
    >
      <S.StyledGridWrapper>
        {Children.toArray(
          items.map((_item) => {
            const fullName = profileFirstNameAndLastNameToFullName(_item);

            return (
              <S.StyledImageWrapper key={_item.avatars[0]} onClick={handleRecordClick(_item)}>
                <Image
                  alt={translations.commonDefaultImageAlt}
                  height={600}
                  layout="responsive"
                  src={_item.avatars[0]}
                  width={400}
                />
                <S.StyledTypography
                  fontWeight={900}
                  variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}
                >
                  {_item.companyName || fullName}
                </S.StyledTypography>
                <S.StyledGradient />
              </S.StyledImageWrapper>
            );
          }),
        )}
      </S.StyledGridWrapper>
    </InfinityScrollImageGallery>
  );
};
