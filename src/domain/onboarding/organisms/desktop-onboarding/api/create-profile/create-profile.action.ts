import { hasOwnProperty } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { STARTUP_CLIENT_TYPE_ID } from '@constants';

import { IDesktopOnboardingMachineContext } from '../../machines';

export const createAccountAction = async (data: IDesktopOnboardingMachineContext) => {
  const isStartupPath = data.stepTwoData.clientTypeId === STARTUP_CLIENT_TYPE_ID;
  const keyToFilterOut = isStartupPath ? 'Investor' : 'Startup';

  const requestData = Object.keys(data).reduce((_accumulator, _value) => {
    if (_value.includes(keyToFilterOut)) {
      return _accumulator;
    }

    const currentObject = data[_value as keyof IDesktopOnboardingMachineContext];

    if (hasOwnProperty(currentObject, 'teamSizeId')) {
      currentObject.teamSizeIds = [currentObject.teamSizeId];

      delete currentObject.teamSizeId;
    }

    return { ..._accumulator, ...currentObject };
  }, {});

  return nextAxiosInstance.post(EApiEndpoint.CREATE_PROFILE, requestData);
};
