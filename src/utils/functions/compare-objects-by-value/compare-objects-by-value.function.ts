import { getObjectProperty } from '..';

export const compareObjectsByValue =
  (key: string) =>
  (
    a: Record<string, unknown> | null | undefined,
    b: Record<string, unknown> | null | undefined,
  ) => {
    const valueA = !a ? '' : getObjectProperty(a, key) || '';
    const valueB = !b ? '' : getObjectProperty(b, key) || '';

    const valueAString = String(valueA).toString();
    const valueBString = String(valueB).toString();

    const valueALowerCase = valueAString.toLowerCase();
    const valueBLowerCase = valueBString.toLowerCase();

    return new Intl.Collator().compare(valueALowerCase, valueBLowerCase);
  };
