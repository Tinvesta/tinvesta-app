const gray = {
  100: '#D2D2D2',
  200: '#A5A5A5',
  300: '#797979',
  400: '#4C4C4C',
  500: '#1F1F1F',
  600: '#1C1C1C',
  700: '#191919',
  800: '#161616',
  900: '#131313',
} as const;

const black = {
  100: '#FAFAFA',
  200: '#F5F5F5',
  300: '#EFEFEF',
  400: '#E0E4E8',
  500: '#EAEAEA',
  600: '#D1D1D1',
  700: '#B7B7B7',
  800: '#A0A0A0',
  900: '#898989',
} as const;

const brand = {
  primary: gray[900],
  secondary: gray[200],
} as const;

const red = {
  100: '#FFF7F7',
  200: '#FFEFEF',
  300: '#FFD6D6',
  400: '#FFAEAE',
  500: '#FF5C5C',
  600: '#DF5151',
  700: '#BF4545',
  800: '#A03A3A',
  900: '#802E2E',
} as const;

const green = {
  100: '#F5FCFA',
  200: '#EBF9F5',
  300: '#CEF0E5',
  400: '#9DE0CC',
  500: '#3BC199',
  600: '#34A986',
  700: '#2c9173',
  800: '#257960',
  900: '#1D604D',
} as const;

const yellow = {
  100: '#FFFEF5',
  200: '#FFFDEB',
  300: '#FDF49D',
  400: '#FCEE6C',
  500: '#FBE83B',
  600: '#E2D135',
  700: '#C9BA2F',
  800: '#B0A329',
  900: '#978B23',
} as const;

const blue = {
  100: '#D9DFFC',
  200: '#B4C0F8',
  300: '#8EA0F5',
  400: '#6981F1',
  500: '#4361EE',
  600: '#3D58D6',
  700: '#364EBE',
  800: '#2F44A7',
  900: '#283A8F',
} as const;

export const color = {
  blue,
  brand,
  gray,
  red,
  green,
  yellow,
  black,
};
