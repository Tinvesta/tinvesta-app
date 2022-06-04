import { HTMLAttributes, ReactElement } from 'react';

import { IProfileDetails } from '@interfaces';

export interface ICardProps {
  record: IProfileDetails;
}

export interface IMotionCardsStackProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactElement<ICardProps> | ReactElement<ICardProps>[];
  drag: boolean;
  isLoading: boolean;
  isProfilePreviewMode: boolean;
  onVote: (profileId: string, vote: boolean) => void;
}
