import { IProfileDetails } from '@interfaces';

export const profileFirstNameAndLastNameToFullName = (
  profileDetails: Pick<IProfileDetails, 'firstName' | 'lastName'>,
) => {
  if (!profileDetails || !profileDetails.firstName) {
    return '';
  }

  if (!profileDetails.lastName) {
    return profileDetails.firstName;
  }

  return `${profileDetails.firstName} ${profileDetails.lastName}`;
};
