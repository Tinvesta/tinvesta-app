import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import animation from './lottie-animation.animation';
import S from './lottie-animation.styles';
import { ILottieAnimationProps } from './lottie-animation.types';

export const LottieAnimation = ({
  onClick,
  setAnimationItem,
}: ILottieAnimationProps): JSX.Element => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      const item = lottie.loadAnimation({
        loop: false,
        autoplay: false,
        animationData: animation,
        container: animationContainerRef.current,
      });

      setAnimationItem(item);

      return () => {
        item.destroy();
      };
    }
  }, []);

  return <S.StyledWrapper ref={animationContainerRef} onClick={onClick} />;
};
