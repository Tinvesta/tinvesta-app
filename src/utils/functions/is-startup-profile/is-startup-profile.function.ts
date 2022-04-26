import { STARTUP_CLIENT_TYPE_ID } from '@constants';

export const isStartupProfile = (clientTypeId: number | string) =>
  clientTypeId === STARTUP_CLIENT_TYPE_ID;
