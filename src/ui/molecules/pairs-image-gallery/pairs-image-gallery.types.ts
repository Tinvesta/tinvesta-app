import { IPair } from '@interfaces';

export interface IPairsImageGalleryProps {
  emptyActionButtonLabel: string;
  emptyLabel: string;
  isLoading: boolean;
  items: IPair[];
  loadMore: (page: number) => void;
  onRecordClick: (record: IPair) => void;
  shouldLoadMore: boolean;
}
