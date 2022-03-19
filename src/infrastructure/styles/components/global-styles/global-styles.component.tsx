import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/montserrat';
import '@fontsource/raleway';
import { normalize } from 'polished';

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ${normalize()}

        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video, input {
          border: 0;
          margin: 0;
          padding: 0;
          font-size: 100%;
          vertical-align: baseline;
          font-family: ${theme.typography.font.montserrat};
        }

        html,
        body {
          color: ${theme.color.brand.secondary};
          background-color: ${theme.color.brand.primary};
          font-size: ${theme.typography.size.fixed.small};
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};
