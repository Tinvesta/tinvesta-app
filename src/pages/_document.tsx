import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';

import createEmotionCache from '../utils/create-emotion-cache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/manifest.json" rel="manifest" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link color="#111111" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#e9e9e9" name="theme-color" />
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
