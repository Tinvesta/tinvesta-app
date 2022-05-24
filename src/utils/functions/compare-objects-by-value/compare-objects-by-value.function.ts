export const compareObjectsByValue =
  <TObject>(key: keyof TObject) =>
  (a: TObject, b: TObject) => {
    const valueA = !a ? '' : a[key] || '';
    const valueB = !b ? '' : b[key] || '';

    const valueAString = String(valueA).toString();
    const valueBString = String(valueB).toString();

    const valueALowerCase = valueAString.toLowerCase();
    const valueBLowerCase = valueBString.toLowerCase();

    return new Intl.Collator().compare(valueALowerCase, valueBLowerCase);
  };
