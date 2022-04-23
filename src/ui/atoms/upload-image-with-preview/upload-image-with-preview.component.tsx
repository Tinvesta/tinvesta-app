import imageCompression from 'browser-image-compression';
import { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFilePicker } from 'use-file-picker';

import { useModal } from '@ui';

import { asyncTryCatchWrapper, replaceVariablesInTranslation, useTranslation } from '@utils';

import { CropImageModalContent } from './parts';
import { translationStrings } from './upload-image-with-preview.defaults';
import S from './upload-image-with-preview.styles';
import { IUploadImageWithPreviewProps } from './upload-image-with-preview.types';

const UploadImageWithPreviewComponent = (
  {
    error,
    imageSizeLimitInMegabytes = 5,
    scaledImageSource,
    setScaledImageSource,
  }: IUploadImageWithPreviewProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const [imageSource, setImageSource] = useState<string>('');
  const [openFileSelector, { clear, loading, plainFiles }] = useFilePicker({
    multiple: false,
    accept: 'image/jpg, image/jpeg, image/png',
  });

  const translations = useTranslation(translationStrings);
  const { hide, Modal, show } = useModal({ withCloseIcon: false });

  const compressAndSetImageSource = (file: File) => async () => {
    const reader = new FileReader();
    const compressedFile = await imageCompression(file, {
      useWebWorker: true,
      maxSizeMB: 2,
      maxIteration: 4,
    });

    reader.addEventListener('load', () => {
      if (reader.result) {
        setImageSource(reader.result.toString());
      }

      show();
    });

    reader.readAsDataURL(compressedFile);
  };

  const onCompressAndSetImageSourceError = () => {
    clear();
    setImageSource('');
    toast.error(translations.componentUploadImageWithPreviewErrorCompression);
  };

  const onSelectFiles = async (files: File[]) => {
    if (!files || files.length === 0) {
      return;
    }

    const firstFile = files[0];
    const fileSizeInMegabytes = firstFile.size / 1024 / 1024;

    if (fileSizeInMegabytes > imageSizeLimitInMegabytes) {
      toast.warning(
        replaceVariablesInTranslation(
          translations.componentUploadImageWithPreviewWarningFileSizeExceeds,
          imageSizeLimitInMegabytes,
        ),
      );

      clear();
      setImageSource('');

      return;
    }

    asyncTryCatchWrapper(compressAndSetImageSource(firstFile), onCompressAndSetImageSourceError);
  };

  useEffect(() => {
    if (!imageSource && !loading && plainFiles.length > 0) {
      onSelectFiles(plainFiles);
    }
  }, [loading, plainFiles.length]);

  const onClickSave = (scaledImage: string) => {
    setScaledImageSource(scaledImage);

    hide();
  };

  const handleRemoveScaledImage = () => {
    clear();
    setImageSource('');
    setScaledImageSource('');
  };

  return (
    <div>
      <Modal>
        <CropImageModalContent
          buttonText={translations.componentUploadImageWithPreviewModalButtonText}
          image={imageSource}
          setScaledImage={onClickSave}
          title={translations.componentUploadImageWithPreviewModalTitle}
        />
      </Modal>
      <S.StyledWrapper ref={ref}>
        {scaledImageSource ? (
          <S.StyledScaledImagePreviewWrapper>
            <S.StyledCancelIcon onClick={handleRemoveScaledImage} />
            <S.StyledImage
              alt={translations.componentUploadImageWithPreviewImageScaledImageAlt}
              src={scaledImageSource}
            />
          </S.StyledScaledImagePreviewWrapper>
        ) : (
          <S.StyledImagePlaceholderWrapper>
            <S.StyledAddIcon onClick={openFileSelector} />
            <S.StyledImagePlaceholder error={error} loading={loading} onClick={openFileSelector} />
          </S.StyledImagePlaceholderWrapper>
        )}
      </S.StyledWrapper>
    </div>
  );
};

export const UploadImageWithPreview = memo(forwardRef(UploadImageWithPreviewComponent));
