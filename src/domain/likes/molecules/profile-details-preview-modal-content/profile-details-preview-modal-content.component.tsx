import { useDeviceDetect } from 'use-device-detect';

import { ProfileDetailsPreview } from '@ui';

import { useTranslation } from '@utils';

import { translationStrings } from './profile-details-preview-modal-content.defaults';
import S from './profile-details-preview-modal-content.styles';
import { IProfileDetailsPreviewModalContentProps } from './profile-details-preview-modal-content.types';

export const ProfileDetailsPreviewModalContent = ({
  onCloseIconClick,
  onVote,
  selectedProfile,
  ...restProps
}: IProfileDetailsPreviewModalContentProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const handleVote = (vote: boolean) => () => onVote(selectedProfile!, vote);

  return (
    <S.StyledWrapper>
      <S.StyledHeader>
        <S.StyledCloseIcon
          fontSize={deviceData.isSmallerThanXS ? 'medium' : 'large'}
          onClick={onCloseIconClick}
        />
      </S.StyledHeader>
      <ProfileDetailsPreview
        {...restProps}
        // @ts-expect-error
        profileDetails={selectedProfile}
      />
      <S.StyledActionsWrapper>
        <S.StyledActionButton color="error" onClick={handleVote(false)}>
          {translations.componentDashboardLikesProfileDetailsPreviewModalContentDislikeButton}
        </S.StyledActionButton>
        <S.StyledActionButton color="success" onClick={handleVote(true)}>
          {translations.componentDashboardLikesProfileDetailsPreviewModalContentLikeButton}
        </S.StyledActionButton>
      </S.StyledActionsWrapper>
    </S.StyledWrapper>
  );
};
