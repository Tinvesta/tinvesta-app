import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import { Error } from '@domain';

import { useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './internal-server-error.defaults';

export const InternalServerErrorPage = (): JSX.Element => {
  const router = useRouter();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const backToHome = () => router.push(ERoutes.DASHBOARD);

  return (
    <Error code="500" message={translations.errorPageInternalServerErrorMessage}>
      <Button
        color="secondary"
        size={deviceData.isSmallerThanXS ? 'medium' : 'large'}
        variant="contained"
        onClick={backToHome}
      >
        {translations.errorPageInternalServerErrorBackToHomepageButton}
      </Button>
    </Error>
  );
};
