import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IDesktopOnboardingMachineContext } from '../../machines';

export const createAccountAction = async (requestData: IDesktopOnboardingMachineContext) =>
  nextAxiosInstance.post(EApiEndpoint.CREATE_PROFILE, requestData);
