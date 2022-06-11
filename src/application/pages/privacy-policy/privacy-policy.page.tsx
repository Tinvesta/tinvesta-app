import { NextSeo } from 'next-seo';

import { PrivacyPolicy } from '@domain';

import { CenterBlockLayout } from '@ui';

export const PrivacyPolicyPage = (): JSX.Element => (
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
          content: 'Tinvesta - Privacy and Policy',
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
          content: 'https://www.tinvesta.io/seo-image.png',
        },
        {
          name: 'og:site_name',
          content: 'Tinvesta - Privacy and Policy',
        },
        {
          name: 'twitter:image',
          content: 'https://www.tinvesta.io/seo-image.png',
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
        {
          name: 'author',
          content: 'Paweł Wojtasiński',
        },
        {
          name: 'keywords',
          content:
            'privacy, policy, privacy and policy, matchmaking, start-ups, startups, investors, investment, crowdfunding, tinder, tinvesta, swipe, swiper, swiping, tinder for start-ups, tinder for investors',
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
        title: 'Tinvesta - Privacy and Policy',
        description:
          'Tinvesta is a matchmaking platform for start-ups and investors all over the world',
        images: [
          {
            width: 800,
            height: 600,
            alt: 'Tinvesta - Privacy and Policy',
            url: 'https://www.tinvesta.io/seo-image.png',
          },
        ],
      }}
      title="Tinvesta - Privacy and Policy"
      twitter={{
        site: 'Tinvesta - Privacy and Policy',
        handle: '@WojtasinskiPawe',
        cardType: 'summary_large_image',
      }}
    />
    <PrivacyPolicy />
  </CenterBlockLayout>
);
