import { isArray } from '@utils';

export const formArrayMinLength =
  (minLength: number, message: string = '') =>
  (value: unknown) => {
    if (!isArray(value)) {
      return true;
    }

    return value.length >= minLength || message;
  };
