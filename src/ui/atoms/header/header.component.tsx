import { Button } from '@mui/material';
import lottie, { AnimationItem, AnimationSegment } from 'lottie-web';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useUser } from '@utils';

import S from './header.styles';
import { IHeaderProps } from './header.types';
import { menuAnimation } from './utils';

export const Header = ({ openLoginModal }: IHeaderProps): JSX.Element => {
  const { logout, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const imageSize = 80;

  const onMenuClick = (): void => {
    const newIsMenuOpen = !isMenuOpen;
    const animationSegments: AnimationSegment = newIsMenuOpen ? [0, 60] : [60, 0];

    setIsMenuOpen(newIsMenuOpen);
    aniamtionItem?.playSegments(animationSegments, true);
  };

  return (
    <S.StyledWrapper>
      <S.StyledContentWrapper>
        <div ref={animationContainerRef} onClick={onMenuClick} />
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
            style={{
              cursor: 'pointer',
            }}
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
