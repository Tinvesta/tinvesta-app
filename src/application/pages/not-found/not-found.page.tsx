import { Button } from '@mui/material';
import { NextSeo } from 'next-seo';
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
      <NextSeo
        noindex
        defaultTitle="Tinvesta"
        description="Tinvesta is a matchmaking platform for start-ups and investors all over the world"
        title="Tinvesta - Not Found"
      />
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
