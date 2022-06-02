import {
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  HighlightOffOutlined as HighlightOffOutlinedIcon,
} from '@mui/icons-material';
import { useAnimation, useMotionValue, useTransform } from 'framer-motion';

import { ProfileCardActionButtons } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './motion-card-wrapper.styles';
import { IMotionCardWrapperProps } from './motion-card-wrapper.types';

const MOVE_TO_X_POSITIVE = 1500;
const MOVE_TO_X_NEGATIVE = -1500;

export const MotionCardWrapper = ({
  children,
  drag,
  id,
  onVote,
  zIndex,
  ...restProps
}: IMotionCardWrapperProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const x = useMotionValue(0);
  const animControls = useAnimation();
  const rotate = useTransform(x, [-750, 750], [-35, 35]);
  const rightIconOpacity = useTransform(x, [50, 200], [0, 200]);
  const leftIconOpacity = useTransform(x, [-200, -50], [200, 0]);

  const markAsVoted = () => {
    if (!drag) {
      return;
    }

    animControls.start({ x: MOVE_TO_X_POSITIVE }).then(() => {
      onVote(true);
    });
  };

  const markAsNotVoted = () => {
    if (!drag) {
      return;
    }

    animControls.start({ x: MOVE_TO_X_NEGATIVE }).then(() => {
      onVote(false);
    });
  };

  const getSensitive = () => {
    if (deviceData.isSmallerThanXS) {
      return 175;
    }

    if (deviceData.isSmallerThanSM) {
      return 250;
    }

    return 300;
  };

  const sensitive = getSensitive();

  return (
    <S.StyledWrapper
      animate={animControls}
      drag={drag}
      dragConstraints={{ left: -750, right: 750 }}
      exit={{ opacity: 0 }}
      style={{
        x,
        rotate,
        zIndex,
      }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) < sensitive) {
          animControls.start({ x: 0, y: 0 });
        } else {
          animControls
            .start({ x: info.offset.x < 0 ? MOVE_TO_X_NEGATIVE : MOVE_TO_X_POSITIVE })
            .then(() => {
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
