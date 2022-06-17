import isString from 'is-string';

export function isNumber(value: unknown): value is number {
  if (typeof value === 'number') {
    return value - value === 0;
  }

  if (isString(value) && value.trim() !== '') {
    return Number.isFinite(+value);
  }

  return false;
}
