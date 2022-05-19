import { IProfileDetails } from '@interfaces';

export interface IMatchModalContentProps {
  likedProfileDetails?: IProfileDetails;
  loggedProfileDetails?: IProfileDetails;
  onClose: () => void;
}
