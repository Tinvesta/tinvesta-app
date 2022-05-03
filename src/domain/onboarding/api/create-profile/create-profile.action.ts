import { nanoid } from 'nanoid';

import { base64ToFile, getFileExtensionFromBase64, hasOwnProperty, isArray } from '@utils';

import { nextAxiosInstance, supabaseInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { STARTUP_CLIENT_TYPE_ID } from '@constants';

import { IDesktopOnboardingMachineContext } from '../../organisms/desktop-onboarding/machines';

export const createAccountAction = async (data: IDesktopOnboardingMachineContext) => {
  const isStartupPath = data.stepTwoData.clientTypeId === STARTUP_CLIENT_TYPE_ID;
  const keyToFilterOut = isStartupPath ? 'Investor' : 'Startup';

  const requestData = await Object.keys(data).reduce(async (_accumulatorPromise, _value) => {
    const _accumulator = await _accumulatorPromise;

    if (_value.includes(keyToFilterOut)) {
      return _accumulator;
    }

    const currentObject = data[_value as keyof IDesktopOnboardingMachineContext];

    if (hasOwnProperty(currentObject, 'teamSizeId')) {
      currentObject.teamSizeIds = [currentObject.teamSizeId];

      delete currentObject.teamSizeId;
    }

    if (hasOwnProperty(currentObject, 'images') && isArray(currentObject.images)) {
      const result = [];

      for (const _image of currentObject.images) {
        const fileExtension = getFileExtensionFromBase64(_image);
        const fileName = `${nanoid()}.${fileExtension}`;
        const base64AsFile = base64ToFile(_image, fileName);

        if (base64AsFile) {
          // eslint-disable-next-line no-await-in-loop
          const { data: avatarUploadData } = await supabaseInstance.storage
            .from('avatars')
            .upload(fileName, base64AsFile);

          result.push(avatarUploadData?.Key);
        }
      }

      currentObject.imageKeys = result;
      delete currentObject.images;
    }

    return { ..._accumulator, ...currentObject };
  }, Promise.resolve({}));

  return nextAxiosInstance.post(EApiEndpoint.CREATE_PROFILE, requestData);
};
