const sizeMapping = {
  small: {
    width: 60,
    height: 60,
  },
  medium: {
    width: 90,
    height: 90,
  },
  large: {
    width: 140,
    height: 140,
  },
};

export const getWidthAndHeightForSize = (size: 'small' | 'medium' | 'large') =>
  sizeMapping[size] || sizeMapping.medium;
