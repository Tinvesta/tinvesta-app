import { IProfileDetails } from '@interfaces';

export interface IMatchModalContentProps {
  closeButtonLabel?: string;
  likedProfileDetails?: IProfileDetails;
  loggedProfileDetails?: IProfileDetails;
  onClose: () => void;
}
