import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import { Error } from '@domain';

import { useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './not-found.defaults';

export const NotFoundPage = (): JSX.Element => {
  const router = useRouter();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const backToHome = () => router.push(ERoutes.DASHBOARD);

  return (
    <Error code="404" message={translations.errorPageNotFoundMessage}>
      <Button
        color="secondary"
        size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
        variant="contained"
        onClick={backToHome}
      >
        {translations.errorPageNotFoundBackToHomepageButton}
      </Button>
    </Error>
  );
};
