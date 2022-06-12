import { AnimationItem } from 'lottie-web';

export interface ILottieAnimationProps {
  onClick: () => void;
  setAnimationItem: (animationItem: AnimationItem) => void;
}
