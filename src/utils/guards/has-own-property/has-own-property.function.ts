import { isObject } from '@utils';

export const hasOwnProperty = <TObject extends {}, TProperty extends PropertyKey>(
  object: TObject,
  property: PropertyKey,
): object is TObject & Record<TProperty, unknown> =>
  isObject(object) && object.hasOwnProperty(property);
