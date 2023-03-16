import {
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  HighlightOffOutlined as HighlightOffOutlinedIcon,
} from '@mui/icons-material';
import { useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useDeviceDetect } from 'use-device-detect';

import { ProfileCardActionButtons } from '..';
import S from './motion-card-wrapper.styles';
import { IMotionCardWrapperProps } from './motion-card-wrapper.types';

export const MotionCardWrapper = ({
  children,
  drag,
  id,
  isProfilePreviewMode,
  onVote,
  zIndex,
  ...restProps
}: IMotionCardWrapperProps): JSX.Element => {
  const { deviceData, windowSize } = useDeviceDetect();

  const rotateWidth = Math.max(windowSize.width, 700);

  const x = useMotionValue(0);
  const animControls = useAnimation();
  const rotate = useTransform(x, [-rotateWidth, rotateWidth], [-35, 35]);
  const rightIconOpacity = useTransform(x, [50, 200], [0, 200]);
  const leftIconOpacity = useTransform(x, [-200, -50], [200, 0]);

  const markAsVoted = () => {
    if (!drag) {
      return;
    }

    animControls.start({ x: rotateWidth }).then(() => {
      onVote(true);
    });
  };

  const markAsNotVoted = () => {
    if (!drag) {
      return;
    }

    animControls.start({ x: -rotateWidth }).then(() => {
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
      drag={drag && !isProfilePreviewMode}
      dragConstraints={{ left: -rotateWidth, right: rotateWidth }}
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
          animControls.start({ x: info.offset.x < 0 ? -rotateWidth : rotateWidth }).then(() => {
            onVote(info.offset.x > 0);
          });
        }
      }}
      {...restProps}
    >
      <>
        <S.StyledCheckCircleOutlinedIconWrapper style={{ opacity: rightIconOpacity }}>
          <CheckCircleOutlinedIcon color="success" />
        </S.StyledCheckCircleOutlinedIconWrapper>
        <S.StyledHighlightOffOutlinedIconWrapper style={{ opacity: leftIconOpacity }}>
          <HighlightOffOutlinedIcon color="error" />
        </S.StyledHighlightOffOutlinedIconWrapper>
        {!isProfilePreviewMode && <S.StyledGradient />}
        {children}
        <ProfileCardActionButtons markAsNotVoted={markAsNotVoted} markAsVoted={markAsVoted} />
      </>
    </S.StyledWrapper>
  );
};
