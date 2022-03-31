import imageCompression from 'browser-image-compression';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { useModal } from '@ui';

import { replaceVariablesInTranslation, useTranslation } from '@utils';

import { CropImageModalContent, UploadImageButton } from './parts';
import { translationStrings } from './upload-image-with-preview.defaults';
import S from './upload-image-with-preview.styles';
import { IUploadImageWithPreviewProps } from './upload-image-with-preview.types';

export const UploadImageWithPreview = ({
  imageSizeLimitInMegabytes = 5,
}: IUploadImageWithPreviewProps): JSX.Element => {
  const [imageSource, setImageSource] = useState<string>('');
  const [scaledImageSource, setScaledImageSource] = useState<string>();

  const translations = useTranslation(translationStrings);

  const { hide, Modal, show } = useModal();

  const onSelectFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const reader = new FileReader();
    const firstFile = event.target.files[0];
    const fileSizeInMegabytes = firstFile.size / 1024 / 1024;

    if (fileSizeInMegabytes > imageSizeLimitInMegabytes) {
      toast.warning(
        replaceVariablesInTranslation(
          translations.componentUploadImageWithPreviewWarningFileSizeExceeds,
          imageSizeLimitInMegabytes.toString(),
        ),
      );

      return;
    }

    const compressedFile = await imageCompression(firstFile, { maxWidthOrHeight: 640 });

    reader.addEventListener('load', () => {
      if (reader.result) {
        setImageSource(reader.result.toString());
      }

      show();
    });
    reader.readAsDataURL(compressedFile);
  };

  const onClickSave = (scaledImage: string) => {
    setScaledImageSource(scaledImage);

    hide();
  };

  return (
    <S.StyledWrapper>
      <Modal>
        <CropImageModalContent
          buttonText={translations.componentUploadImageWithPreviewModalButtonText}
          image={imageSource}
          setScaledImage={onClickSave}
          title={translations.componentUploadImageWithPreviewModalTitle}
        />
      </Modal>
      {scaledImageSource ? (
        <S.StyledImage
          alt={translations.componentUploadImageWithPreviewImageScaledImageAlt}
          src={scaledImageSource}
        />
      ) : (
        <S.StyledImagePlaceholder />
      )}
      <UploadImageButton
        buttonText={translations.componentUploadImageWithPreviewImageUploadButtonText}
        onChange={onSelectFile}
      />
    </S.StyledWrapper>
  );
};
