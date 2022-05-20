import { IPair } from '@interfaces';

export interface IPairsImageGalleryProps<TItem extends IPair> {
  emptyActionButtonLabel: string;
  emptyLabel: string;
  isLoading: boolean;
  items: TItem[];
  loadMore: (page: number) => void;
  onRecordClick: (record: TItem) => void;
  shouldLoadMore: boolean;
}
