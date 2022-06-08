import { Button } from '@mui/material';
import { useCycle } from 'framer-motion';
import lottie, { AnimationItem, AnimationSegment } from 'lottie-web';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useUser } from '@utils';

import S from './header.styles';
import { IHeaderProps } from './header.types';
import { FullScreenMenu } from './parts';
import { menuAnimation } from './utils';

export const Header = ({ openLoginModal }: IHeaderProps): JSX.Element => {
  const { logout, user } = useUser();
  const [open, cycleOpen] = useCycle(false, true);
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [aniamtionItem, setAnimationItem] = useState<AnimationItem>();

  useEffect(() => {
    if (animationContainerRef.current) {
      const item = lottie.loadAnimation({
        loop: false,
        autoplay: false,
        animationData: menuAnimation,
        container: animationContainerRef.current,
      });

      setAnimationItem(item);

      return () => {
        item.destroy();
      };
    }
  }, []);

  const onMenuClick = (): void => {
    if (!aniamtionItem) {
      return;
    }

    const animationSegments: AnimationSegment = !open ? [0, 60] : [60, 0];

    cycleOpen();
    aniamtionItem.playSegments(animationSegments, true);
  };

  const imageSize = 70;

  return (
    <S.StyledWrapper>
      <FullScreenMenu open={open} />
      <S.StyledContentWrapper>
        <S.StyledMenuAnimation ref={animationContainerRef} onClick={onMenuClick} />
        <span
          style={{
            position: 'absolute',
            right: '50%',
            transform: 'translateX(50%)',
            height: imageSize,
          }}
        >
          <Image
            priority
            alt="Tinvesta"
            height={imageSize}
            objectFit="fill"
            src="/images/brandmark-transparent-white.png"
            width={imageSize}
          />
        </span>
        {!user?.client_type_id ? (
          <Button color="secondary" size="large" variant="contained" onClick={openLoginModal}>
            Login
          </Button>
        ) : (
          <Button color="secondary" size="large" variant="contained" onClick={logout}>
            Logout
          </Button>
        )}
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
