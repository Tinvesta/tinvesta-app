import Image from 'next/image';

import { InfinityScrollImageGallery, Empty, Loading } from '@ui';

import { useDeviceDetect, useDidMountEffect, useTranslation } from '@utils';

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

  useDidMountEffect(() => {
    loadMore(0);
  }, []);

  if (isLoading && items.length === 0) {
    return <Loading />;
  }

  if (items.length === 0) {
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
        {items.map((_item) => (
          <S.StyledImageWrapper key={_item.avatars[0]} onClick={handleRecordClick(_item)}>
            <Image
              alt={translations.commonDefaultImageAlt}
              height={600}
              layout="responsive"
              src={_item.avatars[0]}
              width={400}
            />
            <S.StyledTypography fontWeight={900} variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}>
              {_item.companyName}
            </S.StyledTypography>
          </S.StyledImageWrapper>
        ))}
      </S.StyledGridWrapper>
    </InfinityScrollImageGallery>
  );
};
