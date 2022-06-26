import Image from 'next/image';
import { useDeviceDetect } from 'use-device-detect';

import { HeaderAndFooterLayout, LoginModalContent, Modal } from '@ui';

import { useModal, useTranslation } from '@utils';

import { translationStrings } from './error.defaults';
import S from './error.styles';
import { IErrorProps } from './error.types';

export const Error = ({
  children,
  code,
  disableLoginLogoutButton,
  message,
}: IErrorProps): JSX.Element => {
  const {
    hideModal: hideLoginModal,
    open: isLoginModalOpen,
    showModal: showLoginModal,
  } = useModal();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const backgroundImageSrc = deviceData.isSmallerThanMD
    ? '/images/background/mobile-error.svg'
    : '/images/background/desktop-error.svg';

  return (
    <HeaderAndFooterLayout
      disableLoginLogoutButton={disableLoginLogoutButton}
      openLoginModal={showLoginModal}
    >
      <Modal
        open={isLoginModalOpen}
        title={translations.componentHomeModalGetStartedHeader}
        onClose={hideLoginModal}
      >
        <LoginModalContent />
      </Modal>
      <S.StyledWrapper>
        <Image
          priority
          alt={translations.errorPageBackgroundImageAlt}
          layout="fill"
          objectFit="cover"
          src={backgroundImageSrc}
        />
        <S.StyledTypography fontWeight={900} variant="h1">
          {code}
        </S.StyledTypography>
        <S.StyledTypography align="center" variant={deviceData.isSmallerThanXS ? 'body2' : 'h6'}>
          {message}
        </S.StyledTypography>
        <S.StyledActionsWrapper>{children}</S.StyledActionsWrapper>
      </S.StyledWrapper>
    </HeaderAndFooterLayout>
  );
};
