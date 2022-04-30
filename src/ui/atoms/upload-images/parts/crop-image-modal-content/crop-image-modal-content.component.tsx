import { Button, Typography, useTheme } from '@mui/material';
import { createRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { isNumber } from '@utils';

import S from './crop-image-modal-content.styles';
import { ICropImageModalContentProps } from './crop-image-modal-content.types';

export const CropImageModalContent = ({
  buttonText,
  image,
  setScaledImage,
  title,
}: ICropImageModalContentProps): JSX.Element => {
  const theme = useTheme();
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
      <Typography variant="h6">{title}</Typography>
      <AvatarEditor
        ref={avatarEditorRef}
        border={0}
        borderRadius={isNumber(theme.shape.borderRadius) ? theme.shape.borderRadius : 30}
        height={600}
        image={image}
        rotate={0}
        scale={1}
        width={400}
      />
      <Button fullWidth variant="outlined" onClick={onSubmit}>
        {buttonText}
      </Button>
    </S.StyledModalContentWrapper>
  );
};
