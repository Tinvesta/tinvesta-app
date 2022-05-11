import { useQuery } from 'react-query';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '@infrastructure';

import S from './startup-details-preview.styles';
import { IStartupDetailsPreviewProps } from './startup-details-preview.types';

export const StartupDetailsPreview = ({
  profileDetails,
}: IStartupDetailsPreviewProps): JSX.Element => {
  const { data: fetchedProfileDetails } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetails.id],
    profileDetailsAction(profileDetails.id),
  );

  console.log(fetchedProfileDetails);

  return <S.StyledWrapper>{JSON.stringify(profileDetails, null, 2)}</S.StyledWrapper>;
};
