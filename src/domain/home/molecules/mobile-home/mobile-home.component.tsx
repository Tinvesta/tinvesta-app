import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { HeaderAndFooterLayout, useModal } from '@ui';

import { useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { LoginModalContent } from '../../atoms';
import { translationStrings } from './mobile-home.defaults';
import S from './mobile-home.styles';
import { IMobileHomeProps } from './mobile-home.types';

export const MobileHome = ({ clientTypeId, isSignedIn }: IMobileHomeProps): JSX.Element => {
  const router = useRouter();
  const { Modal, show } = useModal();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);
  const [loginModalTitle, setLoginModalTitle] = useState('');

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      setLoginModalTitle(translations.componentHomeModalCreateAccountHeader);

      return show();
    }

    router.push(clientTypeId ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  const openLoginModal = () => {
    show();
    setLoginModalTitle(translations.componentHomeModalGetStartedHeader);
  };

  return (
    <HeaderAndFooterLayout openLoginModal={openLoginModal}>
      <S.StyledWrapper>
        <Modal title={loginModalTitle}>
          <LoginModalContent />
        </Modal>
        <S.StyledTextBlockWrapper>
          <S.StyledHeader
            fontWeight={700}
            textAlign="left"
            variant={deviceData.isSmallerThanXS ? 'h3' : 'h2'}
          >
            {translations.componentHomeHeader}
          </S.StyledHeader>
          <S.StyledSubHeaderWrapper>
            <S.StyledSubheader
              align="center"
              fontWeight={700}
              variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
            >
              {translations.componentHomeSubheader}
            </S.StyledSubheader>
            <Button
              color="secondary"
              size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
              variant="contained"
              onClick={onSignInButtonClick}
            >
              {translations.componentHomeButtonLabel}
            </Button>
          </S.StyledSubHeaderWrapper>
        </S.StyledTextBlockWrapper>
        <S.StyledCardsWrapper>
          <S.StyledMatchCardWrapper>
            <Image
              priority
              alt="Tinvesta"
              height={724}
              objectFit="fill"
              src="/images/match-card.png"
              width={624}
            />
          </S.StyledMatchCardWrapper>
          <S.StyledMaskCardWrapper>
            <Image
              priority
              alt="Tinvesta"
              height={724}
              objectFit="fill"
              src="/images/match-mask.png"
              width={624}
            />
          </S.StyledMaskCardWrapper>
        </S.StyledCardsWrapper>
      </S.StyledWrapper>
    </HeaderAndFooterLayout>
  );
};
