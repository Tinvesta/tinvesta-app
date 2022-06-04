import { HTMLMotionProps } from 'framer-motion';

export interface IMotionCardWrapperProps extends HTMLMotionProps<'div'> {
  drag: boolean;
  isProfilePreviewMode: boolean;
  onVote: (vote: boolean) => void;
  zIndex: number;
}
