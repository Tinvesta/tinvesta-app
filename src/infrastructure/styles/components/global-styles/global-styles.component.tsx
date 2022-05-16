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
            box-sizing: border-box;
          }
        `}
      />
    </>
  );
};
