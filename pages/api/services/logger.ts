/* eslint-disable no-console */
import { EApiError } from '@enums';

export const logApiError = (
  endpoint: string,
  typeOfError: EApiError,
  messagePrefix: string,
  message: unknown,
) => {
  const currentDate = new Date().toISOString();

  console.error(`${currentDate} | -------------------------------------`);
  console.error(`${currentDate} | ${endpoint} - ${typeOfError}`);
  console.error(`${currentDate} | ${messagePrefix}: ${JSON.stringify(message)}`);
  console.error(`${currentDate} | -------------------------------------`);
};
