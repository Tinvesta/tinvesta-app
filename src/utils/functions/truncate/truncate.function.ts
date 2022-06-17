import isString from 'is-string';

export const truncate = (
  string: string | null | undefined,
  truncateAt: number,
  endsWith: string = '...',
) => {
  if (!isString(string)) {
    return '';
  }

  if (string.length > truncateAt) {
    return `${string.slice(0, Math.max(0, truncateAt))}${endsWith}`;
  }

  return string;
};
