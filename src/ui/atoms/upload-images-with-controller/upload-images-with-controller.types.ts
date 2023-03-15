import { FieldValues, UseControllerProps } from 'react-hook-form';

import { IUploadImagesProps } from './parts';

export interface IUploadImagesWithControllerProps<TFieldValues extends FieldValues = FieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  uploadImagesProps?: Omit<IUploadImagesProps, 'scaledImages' | 'setScaledImages'>;
}
