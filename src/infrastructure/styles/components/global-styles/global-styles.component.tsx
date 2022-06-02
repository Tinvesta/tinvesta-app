import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/montserrat';

import { respondToMax } from '@infrastructure';

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__next {
            display: block;
            position: relative;
            color: ${theme.palette.secondary.main};
            background-color: ${theme.palette.background.default};
          }

          body {
            height: 100vh;
            height: fill-available;
            height: -webkit-fill-available;
          }

          html {
            height: fill-available;
            height: -webkit-fill-available;
          }

          #__next {
            height: 100%;
          }

          * {
            scrollbar-width: thin;
            box-sizing: border-box;
            scrollbar-color: ${theme.palette.secondary.main} transparent;
          }

          *::-webkit-scrollbar {
            height: 6px;
            width: 6px;

            ${respondToMax.mobile`
              height: 5px;
              width: 5px;
            `}

            ${respondToMax.xmobile`
              height: 4px;
              width: 4px;
            `}
          }

          *::-webkit-scrollbar-track {
            background: transparent;
          }

          *::-webkit-scrollbar-thumb {
            border: 3px solid transparent;
            border-radius: ${theme.shape.borderRadius}px;
            background-color: ${theme.palette.secondary.main};
          }
        `}
      />
    </>
  );
};
