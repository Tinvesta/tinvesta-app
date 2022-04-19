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
  const rotate = useTransform(x, [-500, 500], [-25, 25]);

  return (
    <S.StyledWrapper
      animate={animControls}
      dragConstraints={{ left: -200, right: 200 }}
      style={{
        x,
        rotate,
      }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) < 150) {
          animControls.start({ x: 0, y: 0 });
        } else {
          animControls.start({ x: info.offset.x < 0 ? -500 : 500, y: 0 });
          onVote(info.offset.x > 0);
        }
      }}
      {...restProps}
    >
      {children}
    </S.StyledWrapper>
  );
};
