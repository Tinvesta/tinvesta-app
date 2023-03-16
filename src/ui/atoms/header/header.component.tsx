import { Button } from '@mui/material';
import useOnlineState from 'beautiful-react-hooks/useOnlineState';
import { useCycle } from 'framer-motion';
import { AnimationItem, AnimationSegment } from 'lottie-web';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import { useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './header.defaults';
import S from './header.styles';
import { IHeaderProps } from './header.types';
import { FullScreenMenu, ILottieAnimationProps } from './parts';

const LottieAnimation = dynamic<ILottieAnimationProps>(() =>
  import('./parts/lottie-animation/lottie-animation.component').then(
    (_module) => _module.LottieAnimation,
  ),
);

export const Header = ({
  disableLoginLogoutButton = false,
  openLoginModal,
  scrollToTop,
}: IHeaderProps): JSX.Element => {
  const router = useRouter();
  const isOnline = useOnlineState();
  const { logout, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const [open, cycleOpen] = useCycle(false, true);
  const [animationItem, setAnimationItem] = useState<AnimationItem>();

  const onMenuClick = (): void => {
    if (!animationItem) {
      return;
    }

    const animationSegments: AnimationSegment = open ? [60, 0] : [0, 60];

    cycleOpen();
    scrollToTop();
    animationItem.playSegments(animationSegments, true);
  };

  const redirectToHome = () => router.push(ERoutes.HOME);

  const getImageSize = () => {
    if (deviceData.isSmallerThanXS) {
      return 45;
    }

    return deviceData.isSmallerThanMD ? 55 : 70;
  };

  const getButtonSize = () => {
    if (deviceData.isSmallerThanXS) {
      return 'small';
    }

    return deviceData.isSmallerThanMD ? 'medium' : 'large';
  };

  const imageSize = getImageSize();
  const buttonSize = getButtonSize();

  return (
    <S.StyledWrapper>
      <FullScreenMenu open={open} toggleMenu={onMenuClick} />
      <S.StyledContentWrapper>
        <LottieAnimation setAnimationItem={setAnimationItem} onClick={onMenuClick} />
        <S.StyledLogoWrapper height={imageSize} onClick={redirectToHome}>
          <Image
            priority
            alt="Tinvesta"
            height={imageSize}
            objectFit="fill"
            src="/images/brandmark-transparent-white.png"
            width={imageSize}
          />
        </S.StyledLogoWrapper>
        {user ? (
          <Button
            color="secondary"
            disabled={disableLoginLogoutButton || !isOnline}
            size={buttonSize}
            variant="outlined"
            onClick={logout}
          >
            {translations.componentFooterButtonLogout}
          </Button>
        ) : (
          <Button
            color="secondary"
            disabled={disableLoginLogoutButton || !isOnline}
            size={buttonSize}
            variant="outlined"
            onClick={openLoginModal}
          >
            {translations.componentFooterButtonLogin}
          </Button>
        )}
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
