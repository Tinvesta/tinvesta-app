import { UseControllerProps } from 'react-hook-form';

import { IUploadImageWithPreviewProps } from '@ui';

export interface IUploadImageWithPreviewWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  uploadImageWithProviderProps?: Omit<
    IUploadImageWithPreviewProps,
    'scaledImageSource' | 'setScaledImageSource'
  >;
}
