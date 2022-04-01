import imageCompression from 'browser-image-compression';
import { ChangeEvent, ForwardedRef, forwardRef, memo, useState } from 'react';
import { toast } from 'react-toastify';

import { useModal } from '@ui';

import { asyncTryCatchWrapper, replaceVariablesInTranslation, useTranslation } from '@utils';

import { CropImageModalContent, UploadImageButton } from './parts';
import { translationStrings } from './upload-image-with-preview.defaults';
import S from './upload-image-with-preview.styles';
import { IUploadImageWithPreviewProps } from './upload-image-with-preview.types';

const UploadImageWithPreviewComponent = (
  {
    error,
    helperText,
    imageSizeLimitInMegabytes = 5,
    scaledImageSource,
    setScaledImageSource,
  }: IUploadImageWithPreviewProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const [imageSource, setImageSource] = useState<string>('');

  const translations = useTranslation(translationStrings);

  const { hide, Modal, show } = useModal({ withCloseIcon: false });

  const compressAndSetImageSource = (file: File) => async () => {
    const reader = new FileReader();
    const compressedFile = await imageCompression(file, { maxWidthOrHeight: 640 });

    reader.addEventListener('load', () => {
      if (reader.result) {
        setImageSource(reader.result.toString());
      }

      show();
    });

    reader.readAsDataURL(compressedFile);
  };

  const onCompressAndSetImageSourceError = () =>
    toast.error(translations.componentUploadImageWithPreviewErrorCompression);

  const onSelectFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const firstFile = event.target.files[0];
    const fileSizeInMegabytes = firstFile.size / 1024 / 1024;

    if (fileSizeInMegabytes > imageSizeLimitInMegabytes) {
      toast.warning(
        replaceVariablesInTranslation(
          translations.componentUploadImageWithPreviewWarningFileSizeExceeds,
          imageSizeLimitInMegabytes,
        ),
      );

      return;
    }

    asyncTryCatchWrapper(compressAndSetImageSource(firstFile), onCompressAndSetImageSourceError);
  };

  const onClickSave = (scaledImage: string) => {
    setScaledImageSource(scaledImage);

    hide();
  };

  const handleRemoveScaledImage = () => setScaledImageSource('');

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
            <S.StyledCloseIcon onClick={handleRemoveScaledImage} />
            <S.StyledImage
              alt={translations.componentUploadImageWithPreviewImageScaledImageAlt}
              src={scaledImageSource}
            />
          </S.StyledScaledImagePreviewWrapper>
        ) : (
          <S.StyledImagePlaceholder error={error} />
        )}
        <UploadImageButton
          buttonText={translations.componentUploadImageWithPreviewImageUploadButtonText}
          error={error}
          onChange={onSelectFile}
        />
      </S.StyledWrapper>
      {helperText && <S.StyledFormHelperText>{helperText}</S.StyledFormHelperText>}
    </div>
  );
};

export const UploadImageWithPreview = memo(forwardRef(UploadImageWithPreviewComponent));
