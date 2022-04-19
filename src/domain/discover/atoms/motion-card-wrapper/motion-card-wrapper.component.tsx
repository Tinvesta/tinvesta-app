import { useAnimation, useMotionValue, useTransform } from 'framer-motion';

import S from './motion-card-wrapper.styles';
import { IMotionCardWrapperProps } from './motion-card-wrapper.types';

export const MotionCardWrapper = ({
  children,
  id,
  onVote,
  ...restProps
}: IMotionCardWrapperProps): JSX.Element => {
  const x = useMotionValue(0);
  const animControls = useAnimation();
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 0.5, 1, 0.5, 0]);

  return (
    <S.StyledWrapper
      animate={animControls}
      dragConstraints={{ left: -200, right: 200 }}
      style={{
        x,
        rotate,
        opacity,
      }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) < 150) {
          animControls.start({ x: 0, y: 0 });
        } else {
          animControls.start({ x: info.offset.x < 0 ? -200 : 200, y: 0 });
          onVote(info.offset.x > 0);
        }
      }}
      {...restProps}
    >
      {children}
    </S.StyledWrapper>
  );
};
