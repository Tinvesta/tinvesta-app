import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import { HeaderAndFooterLayout, useModal } from '@ui';

import { useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { LottieAnimation, SignInModalContent } from '../../atoms';
import { translationStrings } from './desktop-home.defaults';
import S from './desktop-home.styles';
import { IDesktopHomeProps } from './desktop-home.types';

export const DesktopHome = ({ clientTypeId, isSignedIn }: IDesktopHomeProps): JSX.Element => {
  const router = useRouter();
  const { Modal, show } = useModal();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      return show();
    }

    router.push(clientTypeId ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  return (
    <HeaderAndFooterLayout openLoginModal={show}>
      <Modal title="Create account">
        <SignInModalContent />
      </Modal>
      <S.StyledContentWrapper>
        <S.StyledTextBlockWrapper>
          <S.StyledHeader fontWeight={700} textAlign="left" variant="h2">
            {translations.componentHomeHeader}
          </S.StyledHeader>
          <S.StyledSubHeaderWrapper>
            <S.StyledSubheader
              fontWeight={700}
              textAlign="left"
              variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
            >
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
