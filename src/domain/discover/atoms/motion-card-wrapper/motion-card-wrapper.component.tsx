import {
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  HighlightOffOutlined as HighlightOffOutlinedIcon,
} from '@mui/icons-material';
import { useAnimation, useMotionValue, useTransform } from 'framer-motion';

import { ProfileCardActionButtons } from '@ui';

import S from './motion-card-wrapper.styles';
import { IMotionCardWrapperProps } from './motion-card-wrapper.types';

export const MotionCardWrapper = ({
  children,
  id,
  onVote,
  zIndex,
  ...restProps
}: IMotionCardWrapperProps): JSX.Element => {
  const x = useMotionValue(0);
  const animControls = useAnimation();
  const rotate = useTransform(x, [-750, 750], [-35, 35]);
  const rightIconOpacity = useTransform(x, [50, 200], [0, 200]);
  const leftIconOpacity = useTransform(x, [-200, -50], [200, 0]);

  const markAsVoted = () =>
    animControls.start({ x: 1500 }).then(() => {
      onVote(true);
    });

  const markAsNotVoted = () =>
    animControls.start({ x: -1500 }).then(() => {
      onVote(false);
    });

  return (
    <S.StyledWrapper
      drag
      animate={animControls}
      dragConstraints={{ left: -750, right: 750 }}
      exit={{ opacity: 0 }}
      style={{
        x,
        rotate,
        zIndex,
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
      <S.StyledGradient />
      {children}
      <ProfileCardActionButtons markAsNotVoted={markAsNotVoted} markAsVoted={markAsVoted} />
    </S.StyledWrapper>
  );
};
