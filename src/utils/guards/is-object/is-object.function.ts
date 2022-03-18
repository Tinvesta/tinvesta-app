export const isObject = (value: unknown): value is object =>
  typeof value === 'object' && value === Object(value) && !Array.isArray(value);
