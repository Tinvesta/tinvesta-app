export function isNumber(value: unknown): value is number {
  if (typeof value === 'number') {
    return value - value === 0;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite(+value);
  }

  return false;
}
