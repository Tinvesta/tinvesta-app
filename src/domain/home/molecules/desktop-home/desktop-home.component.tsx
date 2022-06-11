import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { HeaderAndFooterLayout, LoginModalContent, Modal } from '@ui';

import { useModal, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { LottieAnimation } from '../../atoms';
import { translationStrings } from './desktop-home.defaults';
import S from './desktop-home.styles';
import { IDesktopHomeProps } from './desktop-home.types';

export const DesktopHome = ({ clientTypeId, isSignedIn }: IDesktopHomeProps): JSX.Element => {
  const router = useRouter();
  const translations = useTranslation(translationStrings);
  const {
    hideModal: hideLoginModal,
    open: isLoginModalOpen,
    showModal: showLoginModal,
  } = useModal();

  const [loginModalTitle, setLoginModalTitle] = useState('');

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      setLoginModalTitle(translations.componentHomeModalCreateAccountHeader);

      return showLoginModal();
    }

    router.push(clientTypeId ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  const openLoginModal = () => {
    showLoginModal();
    setLoginModalTitle(translations.componentHomeModalGetStartedHeader);
  };

  return (
    <HeaderAndFooterLayout openLoginModal={openLoginModal}>
      <Modal open={isLoginModalOpen} title={loginModalTitle} onClose={hideLoginModal}>
        <LoginModalContent />
      </Modal>
      <S.StyledContentWrapper>
        <S.StyledTextBlockWrapper>
          <S.StyledHeader fontWeight={700} textAlign="left" variant="h2">
            {translations.componentHomeHeader}
          </S.StyledHeader>
          <S.StyledSubHeaderWrapper>
            <S.StyledSubheader fontWeight={700} textAlign="left" variant="body1">
              {translations.componentHomeSubheader}
            </S.StyledSubheader>
            <Button
              color="secondary"
              size="large"
              variant="contained"
              onClick={onSignInButtonClick}
            >
              {translations.componentHomeButtonLabel}
            </Button>
          </S.StyledSubHeaderWrapper>
        </S.StyledTextBlockWrapper>
        <S.StyledLottieAnimationWrapper>
          <LottieAnimation />
        </S.StyledLottieAnimationWrapper>
      </S.StyledContentWrapper>
    </HeaderAndFooterLayout>
  );
};
