import { UseControllerProps } from 'react-hook-form';

import { IUploadImagesProps } from '@ui';

export interface IUploadImagesWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  uploadImageWithProviderProps?: Omit<IUploadImagesProps, 'scaledImages' | 'setScaledImages'>;
}
