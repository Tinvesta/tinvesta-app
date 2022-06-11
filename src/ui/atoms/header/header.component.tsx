import { Button } from '@mui/material';
import { useCycle } from 'framer-motion';
import { AnimationItem, AnimationSegment } from 'lottie-web';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useDeviceDetect, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './header.defaults';
import S from './header.styles';
import { IHeaderProps } from './header.types';
import { FullScreenMenu, ILottieAnimationProps } from './parts';

const LottieAnimation = dynamic<ILottieAnimationProps>(
  () =>
    import('./parts/lottie-animation/lottie-animation.component').then(
      (_module) => _module.LottieAnimation,
    ),
  { loading: () => <div /> },
);

export const Header = ({ openLoginModal, scrollToTop }: IHeaderProps): JSX.Element => {
  const router = useRouter();
  const { logout, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const [open, cycleOpen] = useCycle(false, true);
  const [animationItem, setAnimationItem] = useState<AnimationItem>();

  const onMenuClick = (): void => {
    if (!animationItem) {
      return;
    }

    const animationSegments: AnimationSegment = !open ? [0, 60] : [60, 0];

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
        {!user?.client_type_id ? (
          <Button color="secondary" size={buttonSize} variant="contained" onClick={openLoginModal}>
            {translations.componentFooterButtonLogin}
          </Button>
        ) : (
          <Button color="secondary" size={buttonSize} variant="contained" onClick={logout}>
            {translations.componentFooterButtonLogout}
          </Button>
        )}
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
