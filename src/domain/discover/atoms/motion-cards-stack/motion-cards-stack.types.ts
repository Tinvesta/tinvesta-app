import { HTMLAttributes, ReactNode } from 'react';

export interface IMotionCardsStackProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode | ReactNode[];
}
