export interface IUploadImageWithPreviewProps {
  error?: boolean;
  helperText?: string;
  imageSizeLimitInMegabytes?: number;
  scaledImageSource: string;
  setScaledImageSource: (scaledImageSource: string) => void;
}
