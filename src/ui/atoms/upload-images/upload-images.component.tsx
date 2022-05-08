import { Grid } from '@mui/material';
import imageCompression from 'browser-image-compression';
import { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFilePicker } from 'use-file-picker';

import { useModal } from '@ui';

import {
  asyncTryCatchWrapper,
  repeatComponent,
  replaceVariablesInTranslation,
  useTranslation,
} from '@utils';

import { CropImageModalContent } from './parts';
import { translationStrings } from './upload-images.defaults';
import S from './upload-images.styles';
import { IUploadImagesProps } from './upload-images.types';

const UploadImagesComponent = (
  {
    error,
    helperText,
    imageSizeLimitInMegabytes = 5,
    scaledImages,
    setScaledImages,
  }: IUploadImagesProps,
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
    toast.error(translations.componentUploadImagesErrorCompression);
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
          translations.componentUploadImagesWarningFileSizeExceeds,
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
    clear();
    setImageSource('');
    setScaledImages([...scaledImages, scaledImage]);

    hide();
  };

  const handleRemoveScaledImage = (index: number) => () => {
    clear();
    setImageSource('');
    setScaledImages(scaledImages.filter((_, _scaledImageIndex) => _scaledImageIndex !== index));
  };

  return (
    <S.StyledUploadImagesWrapper ref={ref}>
      <Modal>
        <CropImageModalContent
          buttonText={translations.componentUploadImagesModalButtonText}
          image={imageSource}
          setScaledImage={onClickSave}
          title={translations.componentUploadImagesModalTitle}
        />
      </Modal>
      <Grid container rowSpacing={4}>
        {repeatComponent((_index) => {
          const currentElement = scaledImages[_index] || '';

          return (
            <Grid item xs={6}>
              <S.StyledWrapper>
                {currentElement ? (
                  <S.StyledScaledImagePreviewWrapper>
                    <S.StyledCancelIcon onClick={handleRemoveScaledImage(_index)} />
                    <S.StyledImage
                      alt={translations.componentUploadImagesImageScaledImageAlt}
                      src={currentElement}
                    />
                  </S.StyledScaledImagePreviewWrapper>
                ) : (
                  <S.StyledImagePlaceholderWrapper>
                    <S.StyledAddIcon onClick={openFileSelector} />
                    <S.StyledImagePlaceholder
                      error={error}
                      loading={loading}
                      onClick={openFileSelector}
                    />
                  </S.StyledImagePlaceholderWrapper>
                )}
              </S.StyledWrapper>
            </Grid>
          );
        }, 4)}
      </Grid>
      {helperText && <S.StyledFormHelperText>{helperText}</S.StyledFormHelperText>}
    </S.StyledUploadImagesWrapper>
  );
};

export const UploadImages = memo(forwardRef(UploadImagesComponent));
