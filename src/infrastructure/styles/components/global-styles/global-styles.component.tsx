import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/montserrat';

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__next {
            width: 100vw;
            height: 100vh;
            display: block;
            position: relative;
            color: ${theme.palette.secondary.main};
            background-color: ${theme.palette.background.default};
          }

          * {
            scrollbar-width: thin;
            box-sizing: border-box;
            scrollbar-color: ${theme.palette.secondary.main} transparent;
          }

          *::-webkit-scrollbar {
            height: 6px;
            width: 6px;

            @include breakpoint(sm) {
              height: 5px;
              width: 5px;
            }

            @include breakpoint(sm) {
              height: 4px;
              width: 4px;
            }
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
