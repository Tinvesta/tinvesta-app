import { Button, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

import { Scrollbar, useModal } from '@ui';

import { useDeviceDetect } from '@utils';

import { ERoutes } from '@enums';

import { LottieAnimation, SignInModalContent } from '../../atoms';
import S from './desktop-home.styles';
import { IDesktopHomeProps } from './desktop-home.types';

export const DesktopHome = ({ clientTypeId, isSignedIn }: IDesktopHomeProps): JSX.Element => {
  const theme = useTheme();
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
                matchmaking app for startups and investors all over the world. The app enables
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.primary.main,
            position: 'relative',
          }}
        >
          <div
            style={{
              minWidth: 1300,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography
              fontWeight={900}
              style={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              variant="h1"
            >
              It&apos;s free. Start matching!
            </Typography>
            <div>
              <div>
                <div>Header</div>
                <div>KONTENT</div>
              </div>
            </div>
          </div>
        </div>
      </Scrollbar>
    </S.StyledWrapper>
  );
};
