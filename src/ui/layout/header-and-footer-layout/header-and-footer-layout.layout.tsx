import { useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Footer, Header, Scrollbar } from '@ui';

import S from './header-and-footer-layout.styles';
import { IHeaderAndFooterLayoutProps } from './header-and-footer-layout.types';

export const HeaderAndFooterLayout = ({
  children,
  openLoginModal,
}: IHeaderAndFooterLayoutProps): JSX.Element => {
  const scrollbarRef = useRef<Scrollbars>(null);

  const scrollToTop = () => scrollbarRef.current?.scrollToTop();

  return (
    <S.StyledWrapper>
      <Scrollbar ref={scrollbarRef} height="100%">
        <Header openLoginModal={openLoginModal} scrollToTop={scrollToTop} />
        {children}
        <Footer />
      </Scrollbar>
    </S.StyledWrapper>
  );
};
