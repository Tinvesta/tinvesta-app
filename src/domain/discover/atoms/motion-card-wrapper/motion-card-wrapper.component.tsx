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
  const rotate = useTransform(x, [-500, 500], [-35, 35]);

  return (
    <S.StyledWrapper
      drag
      animate={animControls}
      dragConstraints={{ left: -500, right: 500 }}
      exit={{ opacity: 0 }}
      style={{
        x,
        rotate,
      }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) < 250) {
          animControls.start({ x: 0, y: 0 });
        } else {
          animControls.start({ x: info.offset.x < 0 ? -1500 : 1500 }).then(() => {
            onVote(info.offset.x > 0);
          });
        }
      }}
      {...restProps}
    >
      {children}
    </S.StyledWrapper>
  );
};
