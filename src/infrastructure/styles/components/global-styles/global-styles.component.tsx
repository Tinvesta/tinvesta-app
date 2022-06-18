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
            height: 100%;
            display: block;
            position: relative;
            color: ${theme.palette.secondary.main};
            background-color: ${theme.palette.background.default};
          }

          * {
            scrollbar-width: thin;
            box-sizing: border-box;
            scrollbar-color: ${theme.palette.secondary.main} transparent;

            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: -moz-none;
            -o-user-select: none;
            user-select: none;
          }

          *::-webkit-scrollbar {
            height: 6px;
            width: 6px;

            ${respondToMax.sm`
              height: 5px;
              width: 5px;
            `}

            ${respondToMax.xs`
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

          ::-moz-selection {
            color: ${theme.palette.primary.dark};
            background: ${theme.palette.secondary.main};
          }

          ::selection {
            color: ${theme.palette.primary.dark};
            background: ${theme.palette.secondary.main};
          }
        `}
      />
    </>
  );
};
