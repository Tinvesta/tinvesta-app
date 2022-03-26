import { StringifyOptions } from 'query-string';

export interface IOptions extends StringifyOptions {
  withQuestionMarkPrefix?: boolean;
}
