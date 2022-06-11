import { NextSeo } from 'next-seo';

import { Home } from '@domain';

import { CenterBlockLayout } from '@ui';

export const HomePage = (): JSX.Element => (
  <CenterBlockLayout>
    <NextSeo
      additionalMetaTags={[
        {
          name: 'description',
          content:
            'Tinvesta is a matchmaking platform for start-ups and investors all over the world',
        },
        {
          name: 'og:title',
          content: 'Tinvesta - Home',
        },
        {
          name: 'og:description',
          content:
            'Tinvesta is a matchmaking platform for start-ups and investors all over the world',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          content: 'en',
          name: 'og:locale',
        },
        {
          name: 'og:url',
          content: 'https://www.tinvesta.io',
        },
        {
          name: 'og:image',
          content: 'https://www.tinvesta.io/apple-touch-icon.png',
        },
        {
          name: 'og:site_name',
          content: 'Tinvesta - Home',
        },
        {
          name: 'twitter:image',
          content: 'https://www.tinvesta.io/apple-touch-icon.png',
        },
        {
          name: 'twitter:url',
          content: 'https://www.tinvesta.io',
        },
        {
          content: 'Tinvesta',
          name: 'application-name',
        },
        {
          content: 'yes',
          name: 'apple-mobile-web-app-capable',
        },
        {
          content: 'default',
          name: 'apple-mobile-web-app-status-bar-style',
        },
        {
          content: 'telephone=no',
          name: 'format-detection',
        },
      ]}
      canonical="https://www.tinvesta.io"
      defaultTitle="Tinvesta"
      description="Tinvesta is a matchmaking platform for start-ups and investors all over the world"
      languageAlternates={[
        {
          hrefLang: 'en',
          href: 'https://www.tinvesta.io',
        },
      ]}
      openGraph={{
        url: 'https://www.tinvesta.io',
        title: 'Tinvesta - Home',
        description:
          'Tinvesta is a matchmaking platform for start-ups and investors all over the world',
        images: [
          {
            width: 180,
            height: 180,
            alt: 'Tinvesta - Home',
            url: 'https://www.tinvesta.io/apple-touch-icon.png',
          },
        ],
      }}
      title="Tinvesta - Home"
      twitter={{
        site: 'Tinvesta - Home',
        handle: '@WojtasinskiPawe',
        cardType: 'summary_large_image',
      }}
    />
    <Home />
  </CenterBlockLayout>
);
