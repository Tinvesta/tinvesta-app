import { IProfileDetails } from '@interfaces';

export interface IVariables {
  profileId: string;
  vote: boolean;
}

export interface IResponse {
  isMatch: boolean;
  likedProfileDetails?: IProfileDetails;
  loggedProfileDetails?: IProfileDetails;
}
