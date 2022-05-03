import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const subscriptionAction = async (planId: string) =>
  nextAxiosInstance.get(`${EApiEndpoint.SUBSCRIPTION}/${planId}`);
