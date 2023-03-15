import dynamic from 'next/dynamic';
import { Controller, FieldValues } from 'react-hook-form';

import { CenterBlockLayout, Loader } from '@ui';

import { IUploadImagesProps } from './parts';
import { IUploadImagesWithControllerProps } from './upload-images-with-controller.types';

const UploadImages = dynamic<IUploadImagesProps>(
  () =>
    import('./parts/upload-images/upload-images.component').then((_module) => _module.UploadImages),
  {
    loading: () => (
      <CenterBlockLayout minHeight="250px">
        <Loader size="small" />
      </CenterBlockLayout>
    ),
  },
);

export const UploadImagesWithController = <TFieldValues extends FieldValues = FieldValues>({
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
        scaledImages={field.value}
        setScaledImages={field.onChange}
      />
    )}
  />
);
