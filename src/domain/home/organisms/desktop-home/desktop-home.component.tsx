import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useModal } from '@ui';

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

    return 'h1';
  };

  return (
    <S.StyledWrapper>
      <Modal title="Create account">
        <SignInModalContent />
      </Modal>
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        objectFit="cover"
        src="/images/background/desktop-homepage.svg"
      />
      <Typography
        fontWeight={700}
        sx={{ zIndex: 1 }}
        textAlign="center"
        variant={getHeadingVariant()}
      >
        SWIPE &amp; MATCH
      </Typography>
      <S.StyledSubHeaderWrapper>
        <Typography
          fontWeight={700}
          sx={{ zIndex: 1 }}
          textAlign="center"
          variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
        >
          matchmaking app for start-ups and investors all over the world
        </Typography>
        <Button color="secondary" size="large" variant="outlined" onClick={onSignInButtonClick}>
          Create an account
        </Button>
        <Typography fontWeight={700} marginTop={3} sx={{ zIndex: 1 }} variant="body2">
          {'(Early access only for selected users)'}
        </Typography>
        <Typography fontWeight={700} sx={{ zIndex: 1 }} variant="body2">
          {'(Full release planned on 13 June 2022)'}
        </Typography>
      </S.StyledSubHeaderWrapper>
      <div style={{ height: '100%', position: 'absolute', top: 0, right: 0 }}>
        <LottieAnimation />
      </div>
    </S.StyledWrapper>
  );
};
