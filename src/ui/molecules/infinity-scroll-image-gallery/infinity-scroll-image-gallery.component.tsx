import { debounce } from 'debounce';
import { useState } from 'react';

import { Loading } from '@ui';

import { useEventListener } from '@utils';

import S from './infinity-scroll-image-gallery.styles';
import { IInfinityScrollImageGalleryProps } from './infinity-scroll-image-gallery.types';

export const InfinityScrollImageGallery = ({
  children,
  initialPage = 0,
  isLoading,
  loadMore,
  offset = 1000,
  shouldLoadMore = true,
}: IInfinityScrollImageGalleryProps): JSX.Element => {
  const [page, setPage] = useState(initialPage);

  const handleScroll = debounce((event: Event) => {
    if (!event.target || isLoading || !shouldLoadMore) {
      return;
    }

    // @ts-expect-error
    const { scrollHeight, scrollTop } = event.target;
    const currentHeight = Math.ceil(scrollTop + window.innerHeight);

    if (currentHeight + offset >= scrollHeight) {
      const newPage = page + 1;

      setPage(newPage);
      loadMore(newPage);
    }
  }, 500);

  useEventListener('scroll', handleScroll);

  return (
    <S.StyledWrapper>
      {children}
      {isLoading && <Loading />}
    </S.StyledWrapper>
  );
};
