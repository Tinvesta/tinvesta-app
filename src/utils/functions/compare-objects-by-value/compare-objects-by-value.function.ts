import { getNestedObjectProperty } from 'get-nested-object-property';

export const compareObjectsByValue =
  (key: string) =>
  (
    a: Record<string, unknown> | null | undefined,
    b: Record<string, unknown> | null | undefined,
  ) => {
    const valueA = a ? getNestedObjectProperty(a, key) || '' : '';
    const valueB = b ? getNestedObjectProperty(b, key) || '' : '';

    const valueAString = String(valueA).toString();
    const valueBString = String(valueB).toString();

    const valueALowerCase = valueAString.toLowerCase();
    const valueBLowerCase = valueBString.toLowerCase();

    return new Intl.Collator().compare(valueALowerCase, valueBLowerCase);
  };
