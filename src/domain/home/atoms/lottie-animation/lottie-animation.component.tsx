import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import animation from './lottie-animation.animation';

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

  return <div ref={animationContainerRef} />;
};
