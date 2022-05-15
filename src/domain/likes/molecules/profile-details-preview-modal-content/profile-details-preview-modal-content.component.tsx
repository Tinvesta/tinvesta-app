import { ProfileCardActionButtons, ProfileDetailsPreview } from '@ui';

import S from './profile-details-preview-modal-content.styles';
import { IProfileDetailsPreviewModalContentProps } from './profile-details-preview-modal-content.types';

export const ProfileDetailsPreviewModalContent = ({
  selectedProfile,
  ...restProps
}: IProfileDetailsPreviewModalContentProps): JSX.Element => (
  <S.StyledWrapper>
    <ProfileDetailsPreview
      {...restProps}
      // @ts-expect-error
      profileDetails={selectedProfile}
    />
    <ProfileCardActionButtons
      markAsNotVoted={() => console.log('markAsNotVoted')}
      markAsVoted={() => console.log('markAsVoted')}
    />
  </S.StyledWrapper>
);
