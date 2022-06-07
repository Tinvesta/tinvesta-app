import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';

import { createEmotionCache } from '@utils';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/manifest.json" rel="manifest" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link color="#111111" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#FAFBFC" name="theme-color" />
          <link href="/favicon.ico" rel="icon" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

          <meta content="Tinvesta" name="application-name" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="default" name="apple-mobile-web-app-status-bar-style" />
          <meta content="Tinvesta" name="apple-mobile-web-app-title" />
          <meta
            content="Matchmaking app for start-ups and investors all over the world"
            name="description"
          />
          <meta content="telephone=no" name="format-detection" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="#FAFBFC" name="theme-color" />

          <meta content="summary" name="twitter:card" />
          <meta content="https://www.tinvesta.io" name="twitter:url" />
          <meta content="Tinvesta" name="twitter:title" />
          <meta
            content="Matchmaking app for start-ups and investors all over the world"
            name="twitter:description"
          />
          <meta content="https://www.tinvesta.io/apple-touch-icon.pngg" name="twitter:image" />
          <meta content="@PawelWojtasinski" name="twitter:creator" />
          <meta content="website" property="og:type" />
          <meta content="Tinvesta" property="og:title" />
          <meta
            content="Matchmaking app for start-ups and investors all over the world"
            property="og:description"
          />
          <meta content="Tinvesta" property="og:site_name" />
          <meta content="https://www.tinvesta.io" property="og:url" />
          <meta content="https://www.tinvesta.io/apple-touch-icon.png" property="og:image" />

          <link
            href="/images/apple_splash_750.png"
            rel="apple-touch-startup-image"
            sizes="1024x138"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache
  // between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp:
        (App: AppType) =>
        // eslint-disable-next-line react/display-name
        (props) =>
          (
            // @ts-expect-error
            <App emotionCache={cache} {...props} />
          ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
      // eslint-disable-next-line react/no-danger
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
