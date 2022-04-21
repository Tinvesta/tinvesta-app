import { HTMLAttributes, ReactElement } from 'react';

import { IDiscoverRecord } from '@interfaces';

export interface ICardProps {
  record: IDiscoverRecord;
}

export interface IMotionCardsStackProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactElement<ICardProps> | ReactElement<ICardProps>[];
  onVote: (profileId: string, vote: boolean) => void;
}
