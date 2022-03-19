const font = {
  raleway: '"Raleway", sans-serif',
  montserrat: '"Montserrat", sans-serif',
} as const;

const lineHeight = {
  xxsmall: 0.95,
  xsmall: 1.1,
  small: 1.25,
  medium: 1.375,
  large: 1.5,
  xlarge: 1.75,
  xxlarge: 2,
} as const;

const letterSpacing = {
  none: 'normal',
  xxsmall: '-.05em',
  xsmall: '.025em',
  small: '.050em',
  medium: '.075em',
  large: '.150em',
  xlarge: '.500em',
  xxlarge: '.750em',
  xxxlarge: '1em',
} as const;

const fixed = {
  xsmall: '.5rem',
  small: '.75rem',
  regular: '1rem',
  medium: '1.1rem',
  large: '1.25rem',
  xlarge: '1.5rem',
  xxlarge: '2rem',
  xxxlarge: '2.5rem',
  huge: '3rem',
  epic: '3.5rem',
} as const;

const fluid = {
  small: 'clamp(.75rem, 2vw, 1rem)',
  regular: 'clamp(1rem, 4vw, 1.5rem)',
  large: 'clamp(1.5rem, 6vw, 2.5rem)',
  xlarge: 'clamp(2rem, 9vw, 3.5rem)',
} as const;

const weight = {
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  heavy: 900,
} as const;

export const typography = {
  font,
  lineHeight,
  letterSpacing,
  weight,
  size: {
    fixed,
    fluid,
  },
} as const;
