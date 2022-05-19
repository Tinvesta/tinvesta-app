import { ProfileCardActionButtons, ProfileDetailsPreview } from '@ui';

import S from './profile-details-preview-modal-content.styles';
import { IProfileDetailsPreviewModalContentProps } from './profile-details-preview-modal-content.types';

export const ProfileDetailsPreviewModalContent = ({
  onCloseIconClick,
  onVote,
  selectedProfile,
  ...restProps
}: IProfileDetailsPreviewModalContentProps): JSX.Element => {
  const handleVote = (vote: boolean) => () => onVote(selectedProfile?.id!, vote);

  return (
    <S.StyledWrapper>
      <S.StyledHeader>
        <S.StyledCloseIcon fontSize="large" onClick={onCloseIconClick} />
      </S.StyledHeader>
      <ProfileDetailsPreview
        {...restProps}
        // @ts-expect-error
        profileDetails={selectedProfile}
      />
      <ProfileCardActionButtons markAsNotVoted={handleVote(false)} markAsVoted={handleVote(true)} />
    </S.StyledWrapper>
  );
};
