import { nanoid } from 'nanoid';

import { base64ToFile, getFileExtensionFromBase64, hasOwnProperty, isString } from '@utils';

import { nextAxiosInstance, supabaseInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { STARTUP_CLIENT_TYPE_ID } from '@constants';

import { IDesktopOnboardingMachineContext } from '../../machines';

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

    if (
      hasOwnProperty(currentObject, 'representativeImage') &&
      isString(currentObject.representativeImage)
    ) {
      const fileExtension = getFileExtensionFromBase64(currentObject.representativeImage);
      const fileName = `${nanoid()}.${fileExtension}`;
      const base64AsFile = base64ToFile(currentObject.representativeImage, fileName);

      delete currentObject.representativeImage;

      if (base64AsFile) {
        const { data: avatarUploadData } = await supabaseInstance.storage
          .from('avatars')
          .upload(fileName, base64AsFile);

        currentObject.avatarKey = avatarUploadData?.Key;
      }
    }

    return { ..._accumulator, ...currentObject };
  }, Promise.resolve({}));

  return nextAxiosInstance.post(EApiEndpoint.CREATE_PROFILE, requestData);
};
