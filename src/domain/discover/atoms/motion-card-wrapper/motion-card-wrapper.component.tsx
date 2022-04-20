import {
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  HighlightOffOutlined as HighlightOffOutlinedIcon,
} from '@mui/icons-material';
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
  const rightIconOpacity = useTransform(x, [50, 200], [0, 200]);
  const leftIconOpacity = useTransform(x, [-200, -50], [200, 0]);

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
        if (Math.abs(info.offset.x) < 200) {
          animControls.start({ x: 0, y: 0 });
        } else {
          animControls.start({ x: info.offset.x < 0 ? -1500 : 1500 }).then(() => {
            onVote(info.offset.x > 0);
          });
        }
      }}
      {...restProps}
    >
      <S.StyledCheckCircleOutlinedIconWrapper style={{ opacity: rightIconOpacity }}>
        <CheckCircleOutlinedIcon color="success" />
      </S.StyledCheckCircleOutlinedIconWrapper>
      <S.StyledHighlightOffOutlinedIconWrapper style={{ opacity: leftIconOpacity }}>
        <HighlightOffOutlinedIcon color="error" />
      </S.StyledHighlightOffOutlinedIconWrapper>
      {children}
    </S.StyledWrapper>
  );
};
