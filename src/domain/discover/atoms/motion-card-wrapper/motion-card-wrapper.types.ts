import { HTMLMotionProps } from 'framer-motion';

export interface IMotionCardWrapperProps extends HTMLMotionProps<'div'> {
  onVote: (vote: boolean) => void;
}
