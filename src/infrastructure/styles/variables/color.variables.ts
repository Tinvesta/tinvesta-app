const gray = {
  100: '#E6E8E6',
  200: '#CCCECC',
  300: '#B3B4B3',
  400: '#999A99',
  500: '#808180',
  600: '#666766',
  700: '#4C4D4C',
  800: '#333333',
  900: '#191919',
} as const;

const brand = {
  primary: gray[900],
  secondary: gray[200],
} as const;

const red = {
  100: '#FFE3E3',
  200: '#FFC7CD',
  300: '#FFAAB7',
  400: '#FF8EA1',
  500: '#FF728B',
  600: '#FF5575',
  700: '#FF395F',
  800: '#FF1C49',
  900: '#FF0033',
} as const;

const green = {
  100: '#EBF5EE',
  200: '#D0F1E5',
  300: '#B6ECDC',
  400: '#9BE8D3',
  500: '#80E4CB',
  600: '#65DFC2',
  700: '#4BDBB9',
  800: '#30D6B0',
  900: '#15D2A7',
} as const;

const yellow = {
  100: '#FFF3BF',
  200: '#FEE9AF',
  300: '#FEDE9F',
  400: '#FDD48F',
  500: '#FCCA7F',
  600: '#FBBF6F',
  700: '#FBB55F',
  800: '#FAAA4F',
  900: '#F9A03F',
} as const;

const blue = {
  100: '#EEF8FB',
  200: '#DDEFFC',
  300: '#CCE6FC',
  400: '#BBDDFD',
  500: '#AAD4FD',
  600: '#98CAFE',
  700: '#87C1FE',
  800: '#76B8FF',
  900: '#65AFFF',
} as const;

export const color = {
  blue,
  brand,
  gray,
  red,
  green,
  yellow,
};
