import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

import { EApiError } from '@enums';

const getLogger = (fileName = 'application') => {
  const fileLogTransport = new transports.DailyRotateFile({
    filename: `logs/${fileName}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
  });

  const consoleTransport = new transports.Console({
    level: process.env.LOG_LEVEL,
    handleExceptions: false,
    format: format.printf((i) => `${i.message}`),
  });

  const logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.printf(
        ({ level, message, label = process.env.NEXT_PUBLIC_APP_ENV, timestamp }) =>
          `${timestamp} [${label}] ${level}: ${message}`,
      ),
    ),
    defaultMeta: { service: 'Tinvesta' },
    transports: [consoleTransport],
  });

  if (process.env.NEXT_PUBLIC_APP_ENV === 'local') {
    logger.add(fileLogTransport);
  }

  return logger;
};

export const logger = getLogger();

export const logApiError = (
  endpoint: string,
  typeOfError: EApiError,
  messagePrefix: string,
  message: unknown,
) => {
  logger.error('-------------------------------------');
  logger.error(`${endpoint} - ${typeOfError}`);
  logger.error(`${messagePrefix}: ${JSON.stringify(message)}`);
  logger.error('-------------------------------------');
};
