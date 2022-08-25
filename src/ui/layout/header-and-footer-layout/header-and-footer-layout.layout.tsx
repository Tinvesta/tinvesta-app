import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { UIEvent, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDeviceDetect } from 'use-device-detect';

import { Footer, Header, Scrollbar } from '@ui';

import { isNumber } from '@utils';

import S from './header-and-footer-layout.styles';
import { IHeaderAndFooterLayoutProps } from './header-and-footer-layout.types';

const SHOW_BACK_TO_TOP_AT = 400;

export const HeaderAndFooterLayout = ({
  children,
  disableLoginLogoutButton,
  openLoginModal,
}: IHeaderAndFooterLayoutProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const scrollbarRef = useRef<Scrollbars>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => scrollbarRef.current?.scrollToTop();

  const handleScroll = (event: UIEvent<unknown>) => {
    // @ts-expect-error
    if (!event.target || !isNumber(event.target.scrollTop)) {
      return;
    }

    // @ts-expect-error
    const { scrollTop } = event.target;

    if (scrollTop > SHOW_BACK_TO_TOP_AT && !showBackToTop) {
      setShowBackToTop(true);
    } else if (scrollTop <= SHOW_BACK_TO_TOP_AT && showBackToTop) {
      setShowBackToTop(false);
    }
  };

  return (
    <S.StyledWrapper>
      <Scrollbar ref={scrollbarRef} height="100%" onScroll={handleScroll}>
        <Header
          disableLoginLogoutButton={disableLoginLogoutButton}
          openLoginModal={openLoginModal}
          scrollToTop={scrollToTop}
        />
        {children}
        <Footer />
      </Scrollbar>
      <AnimatePresence>
        {showBackToTop && (
          <S.StyledBackToTopButtonWrapper
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <Fab
              color="info"
              size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
              onClick={scrollToTop}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </S.StyledBackToTopButtonWrapper>
        )}
      </AnimatePresence>
    </S.StyledWrapper>
  );
};
