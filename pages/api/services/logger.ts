import { EApiError } from '@enums';

export const logApiError = (
  endpoint: string,
  typeOfError: EApiError,
  messagePrefix: string,
  message: unknown,
) => {
  console.error('-------------------------------------');
  console.error(`${endpoint} - ${typeOfError}`);
  console.error(`${messagePrefix}: ${JSON.stringify(message)}`);
  console.error('-------------------------------------');
};
