import { ReactNode } from 'react';

export interface IInfinityScrollImageGalleryProps {
  children: ReactNode;
  initialPage?: number;
  isLoading: boolean;
  loadMore: (page: number) => void;
  offset?: number;
  shouldLoadMore?: boolean;
}
