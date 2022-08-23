import { Grid } from '@mui/material';
import imageCompression from 'browser-image-compression';
import { NSFWJS, load as loadModel } from 'nsfwjs';
import { DragEvent, ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { repeatComponent } from 'repeat-component';
import { useFilePicker } from 'use-file-picker';

import { Modal } from '@ui';

import { replaceVariablesInTranslation, useModal, useTranslation } from '@utils';

import { INDEXEDDB_TENSORFLOW_MODEL_STORAGE_KEY } from '@constants';

import { CropImageModalContent } from '../crop-image-modal-content/crop-image-modal-content.component';
import { translationStrings } from './upload-images.defaults';
import S from './upload-images.styles';
import { IUploadImagesProps } from './upload-images.types';

const handleDragStart = (src: string) => (event: DragEvent<HTMLSpanElement>) => {
  if (!event.dataTransfer) {
    return;
  }

  event.dataTransfer.setData('imageSrc', src);
};

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

  useEffect(() => {
    loadModel(INDEXEDDB_TENSORFLOW_MODEL_STORAGE_KEY).catch(() => {
      loadModel().then((_model) => _model.model.save(INDEXEDDB_TENSORFLOW_MODEL_STORAGE_KEY));
    });
  }, []);

  const {
    hideModal: hideCropImageModal,
    open: isCropImageModalOpen,
    showModal: showCropImageModal,
  } = useModal();
  const translations = useTranslation(translationStrings);

  const onCompressAndSetImageSourceError = () => {
    clear();
    setImageSource('');
    toast.error(translations.componentUploadImagesErrorCompression);
  };

  const compressAndSetImageSource = async (file: File) => {
    const reader = new FileReader();
    const compressedFile = await imageCompression(file, {
      useWebWorker: true,
      maxSizeMB: 2,
      maxIteration: 4,
    });

    const model = await new Promise<NSFWJS>((resolve, reject) => {
      loadModel(INDEXEDDB_TENSORFLOW_MODEL_STORAGE_KEY)
        .then(resolve)
        .catch(() => {
          loadModel()
            .then(async (_model) => {
              await _model.model.save(INDEXEDDB_TENSORFLOW_MODEL_STORAGE_KEY);

              resolve(_model);
            })
            .catch(reject);
        });
    });

    const createdImageElement = document.createElement('img');

    createdImageElement.style.display = 'none';
    createdImageElement.src = URL.createObjectURL(compressedFile);
    document.body.append(createdImageElement);

    const handleImageLoad = async () => {
      const predictions = await model.classify(createdImageElement);

      createdImageElement.remove();

      const parsedPredictions = Object.fromEntries(
        predictions.map((_value) => [`is${_value.className}Prediction`, _value.probability > 0.7]),
      );

      if (
        parsedPredictions.isDrawingPrediction ||
        parsedPredictions.isSexyPrediction ||
        parsedPredictions.isPornPrediction ||
        parsedPredictions.isHentaiPrediction
      ) {
        onCompressAndSetImageSourceError();

        return;
      }

      reader.addEventListener('load', () => {
        if (reader.result) {
          setImageSource(reader.result.toString());
        }

        showCropImageModal();
      });

      reader.readAsDataURL(compressedFile);
    };

    createdImageElement.addEventListener('load', handleImageLoad);
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

    try {
      await compressAndSetImageSource(firstFile);
    } catch {
      onCompressAndSetImageSourceError();
    }
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

    hideCropImageModal();
  };

  const handleRemoveScaledImage = (index: number) => () => {
    clear();
    setImageSource('');
    setScaledImages(scaledImages.filter((_, _scaledImageIndex) => _scaledImageIndex !== index));
  };

  const onCropImageModalClose = () => {
    setImageSource('');
    hideCropImageModal();
  };

  const handleDrop = (src: string) => (event: DragEvent<HTMLSpanElement>) => {
    if (!event.dataTransfer) {
      return;
    }

    const transferedImageSrc = event.dataTransfer.getData('imageSrc');

    if (transferedImageSrc === src) {
      return;
    }

    const imageSrcIndex = scaledImages.indexOf(src);
    const transferedImageSrcIndex = scaledImages.indexOf(transferedImageSrc);

    const copiedScaledImages = [...scaledImages];

    [copiedScaledImages[imageSrcIndex], copiedScaledImages[transferedImageSrcIndex]] = [
      copiedScaledImages[transferedImageSrcIndex],
      copiedScaledImages[imageSrcIndex],
    ];

    setScaledImages(copiedScaledImages);
  };

  return (
    <S.StyledUploadImagesWrapper ref={ref}>
      <Modal
        open={isCropImageModalOpen}
        title={translations.componentUploadImagesModalTitle}
        onClose={onCropImageModalClose}
      >
        <CropImageModalContent
          buttonText={translations.componentUploadImagesModalButtonText}
          image={imageSource}
          setScaledImage={onClickSave}
        />
      </Modal>
      <Grid container rowSpacing={5}>
        {repeatComponent((_index) => {
          const currentElement = scaledImages[_index] || '';

          return (
            <Grid item xs={6}>
              <S.StyledWrapper>
                {currentElement ? (
                  <S.StyledScaledImagePreviewWrapper
                    draggable
                    onDragOver={(event) => event.preventDefault()}
                    onDragStart={handleDragStart(currentElement)}
                    onDrop={handleDrop(currentElement)}
                  >
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
