import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/montserrat';
import '@fontsource/raleway';

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          color: ${theme.color.brand.secondary};
          background-color: ${theme.color.brand.primary};
          font-size: ${theme.typography.size.fixed.small};
          font-family: ${theme.typography.font.montserrat};
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};
