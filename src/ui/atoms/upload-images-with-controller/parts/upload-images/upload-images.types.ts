export interface IUploadImagesProps {
  error?: boolean;
  helperText?: string;
  imageSizeLimitInMegabytes?: number;
  scaledImages: string[];
  setScaledImages: (scaledImages: string[]) => void;
}
