export const truncate = (string: string, truncateAt: number, endsWith: string = '...') => {
  if (string.length > truncateAt) {
    return `${string.slice(0, Math.max(0, truncateAt))}${endsWith}`;
  }

  return string;
};
