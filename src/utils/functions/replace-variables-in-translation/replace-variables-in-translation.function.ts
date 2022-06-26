import isString from 'is-string';

export const replaceVariablesInTranslation = (
  translation: string,
  ...values: (string | number)[]
) => {
  if (!isString(translation)) {
    return '';
  }

  if (!values || values.length === 0) {
    return translation;
  }

  return values
    .reduce(
      (_accumulator, _value, _index) =>
        _accumulator.toString().replace(`{{${_index}}}`, _value.toString()),
      translation,
    )
    .toString();
};
