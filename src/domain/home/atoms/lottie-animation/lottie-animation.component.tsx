import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import animation from './lottie-animation.animation';
import S from './lottie-animation.styles';

export const LottieAnimation = (): JSX.Element => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      lottie.loadAnimation({
        animationData: animation,
        container: animationContainerRef.current,
      });
    }
  }, []);

  return <S.StyledWrapper ref={animationContainerRef} />;
};
