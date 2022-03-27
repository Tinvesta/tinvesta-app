import { Button, Typography, useTheme } from '@mui/material';
import imageCompression from 'browser-image-compression';
import { ChangeEvent, createRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { useModal } from '@ui';

import { isNumber } from '@utils';

import { UploadImageButton } from './parts';
import S from './upload-image-with-preview.styles';

export const UploadImageWithPreview = (): JSX.Element => {
  const [imageSource, setImageSource] = useState<string>('');
  const [scaledImageSource, setScaledImageSource] = useState<string>();

  const { hide, Modal, show } = useModal();
  const theme = useTheme();
  const avatarEditorRef = createRef<AvatarEditor>();

  const onSelectFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const reader = new FileReader();
    const firstFile = event.target.files[0];
    const fileSizeInMegabytes = firstFile.size / 1024 / 1024;

    if (fileSizeInMegabytes > 5) {
      alert('File size exceeds 5 MiB');

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

  const onClickSave = () => {
    if (avatarEditorRef.current) {
      const canvasScaled = avatarEditorRef.current.getImageScaledToCanvas();

      setScaledImageSource(canvasScaled.toDataURL());
      hide();
    }
  };

  return (
    <S.StyledWrapper>
      <Modal>
        <>
          <Typography variant="h6">Cut your representative image</Typography>
          <AvatarEditor
            ref={avatarEditorRef}
            disableDrop
            border={0}
            borderRadius={isNumber(theme.shape.borderRadius) ? theme.shape.borderRadius : 30}
            height={600}
            image={imageSource}
            rotate={0}
            scale={1}
            width={400}
          />
          <Button variant="contained" onClick={onClickSave}>
            Save image
          </Button>
        </>
      </Modal>
      {scaledImageSource ? (
        <S.StyledImage alt="user representative image" src={scaledImageSource} />
      ) : (
        <S.StyledImagePlaceholder />
      )}
      <UploadImageButton buttonText="Upload your representative photo" onChange={onSelectFile} />
    </S.StyledWrapper>
  );
};
