import { Controller } from 'react-hook-form';

import { UploadImageWithPreview } from '@ui';

import { IUploadImageWithPreviewWithControllerProps } from './upload-image-with-preview-with-controller.types';

export const UploadImageWithPreviewWithController = <TFieldValues,>({
  controllerProps,
  uploadImageWithProviderProps,
}: IUploadImageWithPreviewWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <UploadImageWithPreview
        {...uploadImageWithProviderProps}
        {...field}
        error={invalid}
        helperText={error?.message || ' '}
        id={field.name}
        // @ts-expect-error
        scaledImageSource={field.value}
        setScaledImageSource={field.onChange}
      />
    )}
  />
);
