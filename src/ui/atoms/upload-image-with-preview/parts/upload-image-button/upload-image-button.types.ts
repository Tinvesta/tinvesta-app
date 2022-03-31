import { ChangeEvent } from 'react';

export interface IUploadImageButtonProps {
  buttonText: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
