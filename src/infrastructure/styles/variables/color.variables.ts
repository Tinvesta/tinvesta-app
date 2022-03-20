const gray = {
  100: '#f1f3f5',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#868e96',
  700: '#495057',
  800: '#343a40',
  900: '#111111',
} as const;

const brand = {
  primary: gray[900],
  secondary: gray[200],
} as const;

const red = {
  100: '#ffe3e3',
  200: '#ffc9c9',
  300: '#ffa8a8',
  400: '#ff8787',
  500: '#ff6b6b',
  600: '#fa5252',
  700: '#f03e3e',
  800: '#e03131',
  900: '#c92a2a',
} as const;

const green = {
  100: '#d3f9d8',
  200: '#b2f2bb',
  300: '#8ce99a',
  400: '#69db7c',
  500: '#51cf66',
  600: '#40c057',
  700: '#37b24d',
  800: '#2f9e44',
  900: '#2b8a3e',
} as const;

const yellow = {
  100: '#fff3bf',
  200: '#ffec99',
  300: '#ffe066',
  400: '#ffd43b',
  500: '#fcc419',
  600: '#fab005',
  700: '#f59f00',
  800: '#f08c00',
  900: '#e67700',
} as const;

const blue = {
  100: '#eef8fb',
  200: '#def2f8',
  300: '#cdecf5',
  400: '#bde5f1',
  500: '#addfee',
  600: '#9cd9eb',
  700: '#8cd2e7',
  800: '#7bcce4',
  900: '#6bc6e1',
} as const;

export const color = {
  blue,
  brand,
  gray,
  red,
  green,
  yellow,
};
