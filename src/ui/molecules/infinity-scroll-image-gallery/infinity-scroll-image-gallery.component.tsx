import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent';
import { debounce } from 'debounce';
import { useState } from 'react';

import { Loading } from '@ui';

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

  const onGlobalScroll = useGlobalEvent('scroll', { passive: true });

  onGlobalScroll(handleScroll);

  return (
    <S.StyledWrapper>
      {children}
      {isLoading && <Loading />}
    </S.StyledWrapper>
  );
};
