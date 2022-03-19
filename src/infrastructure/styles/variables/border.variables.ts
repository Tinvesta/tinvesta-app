const width = {
  none: 0,
  small: '1px',
  medium: '2px',
  large: '5px',
  xlarge: '10px',
  xxlarge: '25px',
} as const;

const radius = {
  none: 0,
  xsmall: '2px',
  small: '5px',
  medium: '1rem',
  large: '2rem',
  xlarge: '4rem',
  xxlarge: '8rem',
} as const;

export const border = {
  width,
  radius,
};
