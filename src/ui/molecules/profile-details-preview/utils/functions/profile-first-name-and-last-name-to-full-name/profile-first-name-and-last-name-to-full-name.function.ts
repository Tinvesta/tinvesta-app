import { IProfileDetails } from '@interfaces';

export const profileFirstNameAndLastNameToFullName = (profileDetails: IProfileDetails) => {
  if (!profileDetails || !profileDetails.firstName) {
    return '';
  }

  if (!profileDetails.lastName) {
    return profileDetails.firstName;
  }

  return `${profileDetails.firstName} ${profileDetails.lastName}`;
};
