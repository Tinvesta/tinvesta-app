import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/montserrat';

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            color: ${theme.palette.primary.main};
            background-color: ${theme.palette.secondary.main};
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
    </>
  );
};
