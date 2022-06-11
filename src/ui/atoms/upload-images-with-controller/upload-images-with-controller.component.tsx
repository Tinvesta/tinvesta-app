import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';

import { IUploadImagesProps } from './parts';
import { IUploadImagesWithControllerProps } from './upload-images-with-controller.types';

const UploadImages = dynamic<IUploadImagesProps>(() =>
  import('./parts/upload-images/upload-images.component').then((mod) => mod.UploadImages),
);

export const UploadImagesWithController = <TFieldValues,>({
  controllerProps,
  uploadImagesProps,
}: IUploadImagesWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <UploadImages
        {...uploadImagesProps}
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
