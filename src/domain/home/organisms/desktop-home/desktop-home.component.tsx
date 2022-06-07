import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { Footer, Scrollbar, useModal } from '@ui';

import { useDeviceDetect } from '@utils';

import { ERoutes } from '@enums';

import { LottieAnimation, SignInModalContent } from '../../atoms';
import S from './desktop-home.styles';
import { IDesktopHomeProps } from './desktop-home.types';

export const DesktopHome = ({ clientTypeId, isSignedIn }: IDesktopHomeProps): JSX.Element => {
  const router = useRouter();
  const { Modal, show } = useModal();
  const { deviceData } = useDeviceDetect();

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      return show();
    }

    router.push(clientTypeId ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  const getHeadingVariant = () => {
    if (deviceData.isSmallerThanXS) {
      return 'h4';
    }

    if (deviceData.isSmallerThanSM) {
      return 'h3';
    }

    if (deviceData.isSmallerThanMD) {
      return 'h2';
    }

    return 'h2';
  };

  return (
    <S.StyledWrapper>
      <Scrollbar height="100%" style={{ overflowX: 'hidden' }}>
        <Modal title="Create account">
          <SignInModalContent />
        </Modal>
        <S.StyledContentWrapper>
          <S.StyledTextBlockWrapper>
            <Typography
              fontWeight={700}
              sx={{ position: 'relative', zIndex: 10, wordBreak: 'keep-all' }}
              textAlign="left"
              variant={getHeadingVariant()}
            >
              SWIPE &amp; MATCH
            </Typography>
            <S.StyledSubHeaderWrapper>
              <Typography
                fontWeight={700}
                sx={{ zIndex: 1, maxWidth: 600 }}
                textAlign="left"
                variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
              >
                Matchmaking app for startups and investors all over the world. The app enables
                investors and startups to find each other in the easiest way: create a profile -
                swipe - match.
              </Typography>
              <Button
                color="secondary"
                size="large"
                variant="contained"
                onClick={onSignInButtonClick}
              >
                Create an account
              </Button>
            </S.StyledSubHeaderWrapper>
          </S.StyledTextBlockWrapper>
          <div style={{ width: 800 }}>
            <LottieAnimation />
          </div>
        </S.StyledContentWrapper>
        <Footer />
      </Scrollbar>
    </S.StyledWrapper>
  );
};
