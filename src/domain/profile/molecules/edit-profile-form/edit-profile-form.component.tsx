import { useQuery } from 'react-query';

import { useUser } from '@utils';

import { PROFILE_DETAILS_ACTION_QUERY_KEY, profileDetailsAction } from '../../api';
import { DesktopInvestorEditProfileForm, SectionWrapperLayout } from '../../atoms';
import { IEditProfileFormProps } from './edit-profile-form.types';

export const EditProfileForm = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  startupSectors,
  teamSizes,
}: IEditProfileFormProps): JSX.Element => {
  const { user } = useUser();
  const { data: profileDetailsActionData } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, user?.id],
    profileDetailsAction(user?.id),
  );

  return (
    <SectionWrapperLayout title="Edit Investor Profile">
      <DesktopInvestorEditProfileForm
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        investorDemandTypes={investorDemandTypes}
        investorProfileTypes={investorProfileTypes}
        profileDetails={profileDetailsActionData?.data}
        startupSectors={startupSectors}
        teamSizes={teamSizes}
      />
    </SectionWrapperLayout>
  );
};
