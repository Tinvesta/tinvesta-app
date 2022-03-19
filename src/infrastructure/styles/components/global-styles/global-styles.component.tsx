import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/montserrat';
import '@fontsource/raleway';

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
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
    </>
  );
};
