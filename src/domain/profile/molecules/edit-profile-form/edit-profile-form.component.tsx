import { useQuery } from 'react-query';

import { useUser } from '@utils';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '../../api';
import { SectionWrapperLayout } from '../../atoms';
import { IEditProfileFormProps } from './edit-profile-form.types';

export const EditProfileForm = ({ clientTypes }: IEditProfileFormProps): JSX.Element => {
  const { user } = useUser();
  const { data: profileDetailsActionData, isLoading: isProfileDetailsActionLoading } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, user?.id],
    profileDetailsAction(user?.id),
  );

  console.log(clientTypes, profileDetailsActionData, isProfileDetailsActionLoading);

  return <SectionWrapperLayout title="Edit profile">EditProfileForm</SectionWrapperLayout>;
};
