const sizeMapping = {
  small: {
    width: 90,
    height: 90,
  },
  medium: {
    width: 140,
    height: 140,
  },
  large: {
    width: 200,
    height: 200,
  },
};

export const getWidthAndHeightForSize = (size: 'small' | 'medium' | 'large') =>
  sizeMapping[size] || sizeMapping.medium;
