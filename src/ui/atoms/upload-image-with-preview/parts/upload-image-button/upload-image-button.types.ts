import { ChangeEvent } from 'react';

export interface IUploadImageButtonProps {
  buttonText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
