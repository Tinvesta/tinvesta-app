import {
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  HighlightOffOutlined as HighlightOffOutlinedIcon,
} from '@mui/icons-material';
import { useAnimation, useMotionValue, useTransform } from 'framer-motion';

import { useDeviceDetect } from '@utils';

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

  const x = useMotionValue(0);
  const animControls = useAnimation();
  const rotate = useTransform(x, [-windowSize.width, windowSize.width], [-35, 35]);
  const rightIconOpacity = useTransform(x, [50, 200], [0, 200]);
  const leftIconOpacity = useTransform(x, [-200, -50], [200, 0]);

  const markAsVoted = () => {
    if (!drag) {
      return;
    }

    animControls.start({ x: windowSize.width }).then(() => {
      onVote(true);
    });
  };

  const markAsNotVoted = () => {
    if (!drag) {
      return;
    }

    animControls.start({ x: -windowSize.width }).then(() => {
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
      dragConstraints={{ left: -windowSize.width, right: windowSize.width }}
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
            .start({ x: info.offset.x < 0 ? -windowSize.width : windowSize.width })
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
      {!isProfilePreviewMode && <S.StyledGradient />}
      {children}
      <ProfileCardActionButtons markAsNotVoted={markAsNotVoted} markAsVoted={markAsVoted} />
    </S.StyledWrapper>
  );
};
