import { Button } from '@mui/material';
import { memo } from 'react';

import S from './upload-image-button.styles';
import { IUploadImageButtonProps } from './upload-image-button.types';

const UploadImageButtonComponent = ({
  buttonText,
  error,
  onChange,
}: IUploadImageButtonProps): JSX.Element => (
  <label htmlFor="upload-image-button">
    <S.StyledInput
      accept="image/jpg, image/jpeg, image/png"
      id="upload-image-button"
      type="file"
      onChange={onChange}
    />
    <Button color={error ? 'error' : 'primary'} component="span" variant="outlined">
      {buttonText}
    </Button>
  </label>
);

export const UploadImageButton = memo(UploadImageButtonComponent);
