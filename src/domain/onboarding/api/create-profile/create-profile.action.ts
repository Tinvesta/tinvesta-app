import { nanoid } from 'nanoid';
import { hasOwnProperty } from 'ts-has-own-property';
import { objectKeys } from 'ts-object-keys';

import { base64ToFile, getFileExtensionFromBase64, isArray, isStartupProfile } from '@utils';

import { nextAxiosInstance, supabaseInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IDesktopOnboardingMachineContext } from '../../organisms/desktop-onboarding/machines';

export const createProfileAction = async (
  data: IDesktopOnboardingMachineContext & { userRef?: string },
) => {
  const isStartupPath = isStartupProfile(data.stepTwoData.clientTypeId);
  const keyToFilterOut = isStartupPath ? 'Investor' : 'Startup';

  const requestData = await objectKeys(data).reduce(async (_accumulatorPromise, _value) => {
    const _accumulator = await _accumulatorPromise;

    if (_value === 'userRef') {
      return { ..._accumulator, userRef: data.userRef };
    }

    if (_value.includes(keyToFilterOut)) {
      return _accumulator;
    }

    const currentObject = data[_value];

    if (hasOwnProperty(currentObject, 'teamSizeId')) {
      // @ts-expect-error
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
          const { data: avatarUploadData, error: avatarUploadError } =
            // eslint-disable-next-line no-await-in-loop
            await supabaseInstance.storage.from('avatars').upload(fileName, base64AsFile);

          if (avatarUploadError) {
            throw new Error(avatarUploadError.message);
          }

          result.push(avatarUploadData?.Key);
        }
      }

      // @ts-expect-error
      currentObject.imageKeys = result;

      delete currentObject.images;
    }

    return { ..._accumulator, ...currentObject };
  }, Promise.resolve({}));

  return nextAxiosInstance.post(EApiEndpoint.CREATE_PROFILE, requestData);
};
