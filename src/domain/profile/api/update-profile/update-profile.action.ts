import { nanoid } from 'nanoid';

import { IEditProfileFormFieldsData } from '@domain/profile/profile.types';

import {
  base64ToFile,
  getFileExtensionFromBase64,
  isNumber,
  isStringArray,
  objectKeys,
} from '@utils';

import { nextAxiosInstance, supabaseInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IInputVariables } from './update-profile.types';
import { transformUpdateProfileFormData } from './utils';

export const updateProfileAction = async ({ clientTypeId, newData, oldData }: IInputVariables) => {
  const transformedData = transformUpdateProfileFormData(newData, oldData);

  for (const _key of objectKeys(transformedData)) {
    const currentValue = transformedData[_key as keyof IEditProfileFormFieldsData];

    if (_key === 'teamSizeId' && isNumber(transformedData.teamSizeId)) {
      transformedData.teamSizeIds = [transformedData.teamSizeId];

      delete transformedData.teamSizeId;
    }

    if (_key === 'images' && isStringArray(currentValue)) {
      const result: string[] = [];

      for (const _image of currentValue) {
        const fileExtension = getFileExtensionFromBase64(_image);
        const fileName = `${nanoid()}.${fileExtension}`;
        const base64AsFile = base64ToFile(_image, fileName);

        if (base64AsFile) {
          // eslint-disable-next-line no-await-in-loop
          const { data: avatarUploadData } = await supabaseInstance.storage
            .from('avatars')
            .upload(fileName, base64AsFile);

          result.push(avatarUploadData?.Key ? avatarUploadData?.Key : _image);
        } else {
          result.push(_image);
        }
      }

      transformedData.imageKeys = result;
      delete transformedData.images;
    }
  }

  return nextAxiosInstance.post(EApiEndpoint.UPDATE_PROFILE, { clientTypeId, ...transformedData });
};
