import { Button, useTheme } from '@mui/material';
import { createRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { isNumber, useDeviceDetect } from '@utils';

import S from './crop-image-modal-content.styles';
import { ICropImageModalContentProps } from './crop-image-modal-content.types';

export const CropImageModalContent = ({
  buttonText,
  image,
  setScaledImage,
}: ICropImageModalContentProps): JSX.Element => {
  const theme = useTheme();
  const { deviceData } = useDeviceDetect();
  const avatarEditorRef = createRef<AvatarEditor>();

  const onSubmit = () => {
    if (!avatarEditorRef.current) {
      return;
    }

    const canvasScaled = avatarEditorRef.current.getImageScaledToCanvas();

    setScaledImage(canvasScaled.toDataURL());
  };

  return (
    <S.StyledModalContentWrapper>
      <AvatarEditor
        ref={avatarEditorRef}
        border={0}
        borderRadius={isNumber(theme.shape.borderRadius) ? theme.shape.borderRadius : 30}
        height={550}
        image={image}
        rotate={0}
        scale={1}
        width={450}
      />
      <Button
        color="secondary"
        fullWidth={deviceData.isSmallerThanXS}
        size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
        sx={{ minWidth: '150px' }}
        variant="contained"
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </S.StyledModalContentWrapper>
  );
};
