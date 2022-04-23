export interface IUploadImageWithPreviewProps {
  error?: boolean;
  imageSizeLimitInMegabytes?: number;
  scaledImageSource: string;
  setScaledImageSource: (scaledImageSource: string) => void;
}
