import { UseControllerProps } from 'react-hook-form';

import { IUploadImagesProps } from './parts';

export interface IUploadImagesWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  uploadImagesProps?: Omit<IUploadImagesProps, 'scaledImages' | 'setScaledImages'>;
}
