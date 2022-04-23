import { Controller } from 'react-hook-form';

import { UploadImages } from '@ui';

import { IUploadImagesWithControllerProps } from './upload-images-with-controller.types';

export const UploadImagesWithController = <TFieldValues,>({
  controllerProps,
  uploadImageWithProviderProps,
}: IUploadImagesWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <UploadImages
        {...uploadImageWithProviderProps}
        {...field}
        error={invalid}
        helperText={error?.message || ' '}
        id={field.name}
        // @ts-expect-error
        scaledImages={field.value}
        setScaledImages={field.onChange}
      />
    )}
  />
);
