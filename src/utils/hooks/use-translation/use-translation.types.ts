export type TStringOrArray = string | string[];

type TCamelCase<S extends string> = S extends `${infer P1}.${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${TCamelCase<P3>}`
  : Lowercase<S>;

export type TMessages<T extends readonly string[]> = {
  [key in T[number] as `${TCamelCase<key>}`]: string;
};
