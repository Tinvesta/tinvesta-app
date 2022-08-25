import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import { CenterBlockLayout } from '@ui';

const Terms = dynamic<{}>(() =>
  import('../../../domain/terms/terms.component').then((_module) => _module.Terms),
);

export const TermsPage = (): JSX.Element => (
  <CenterBlockLayout>
    <NextSeo
      additionalMetaTags={[
        {
          name: 'description',
          content:
            'Tinvesta is a matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match.',
        },
        {
          name: 'og:title',
          content: 'Tinvesta | Terms & Conditions',
        },
        {
          name: 'og:description',
          content:
            'Tinvesta is a matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match.',
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
          name: 'og:site_name',
          content: 'Tinvesta | Terms & Conditions',
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
            'terms, conditions, terms and conditions, matchmaking, start-ups, startups, startup, investors, investor, investment, crowdfunding, tinder, tinvesta, swipe, swiper, swiping, tinder for start-ups, tinder for investors, matching app for investors, matching app for startups, matching app for investor, matching app for startup',
        },
      ]}
      canonical="https://www.tinvesta.io"
      defaultTitle="Tinvesta"
      description="Tinvesta is a matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match."
      languageAlternates={[
        {
          hrefLang: 'en',
          href: 'https://www.tinvesta.io',
        },
      ]}
      openGraph={{
        url: 'https://www.tinvesta.io',
        title: 'Tinvesta | Terms & Conditions',
        description:
          'Tinvesta is a matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match.',
        images: [
          {
            width: 800,
            height: 600,
            alt: 'Tinvesta | Terms & Conditions',
            url: 'https://www.tinvesta.io/seo-image.png',
          },
        ],
      }}
      title="Tinvesta | Terms & Conditions"
      twitter={{
        site: 'Tinvesta | Terms & Conditions',
        handle: '@WojtasinskiPawe',
        cardType: 'summary_large_image',
      }}
    />
    <Terms />
  </CenterBlockLayout>
);
