const sizeMapping = {
  small: {
    width: 80,
    height: 80,
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
