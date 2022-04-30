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
  200: '#CFE4DA',
  300: '#B3D3C6',
  400: '#97C2B2',
  500: '#7BB29F',
  600: '#5FA18B',
  700: '#439077',
  800: '#277F63',
  900: '#0B6E4F',
} as const;

const yellow = {
  100: '#FFF3BF',
  200: '#FDEAAD',
  300: '#FAE09A',
  400: '#F8D788',
  500: '#F6CD76',
  600: '#F3C463',
  700: '#F1BA51',
  800: '#EEB13E',
  900: '#ECA72C',
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
