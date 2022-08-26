import { useDeviceDetect } from 'use-device-detect';

import { ProfileDetailsPreview } from '@ui';

import { sendEmail, useTranslation } from '@utils';

import { translationStrings } from './profile-details-preview-modal-content.defaults';
import S from './profile-details-preview-modal-content.styles';
import { IProfileDetailsPreviewModalContentProps } from './profile-details-preview-modal-content.types';

export const ProfileDetailsPreviewModalContent = ({
  isLoading,
  onCloseIconClick,
  onRemoveMatchClick,
  selectedProfile,
  ...restProps
}: IProfileDetailsPreviewModalContentProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const handleSendEmail = () => sendEmail(selectedProfile!.contactEmail);

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
        <S.StyledActionButton color="error" onClick={onRemoveMatchClick}>
          {translations.componentDashboardMatchesProfileDetailsPreviewModalContentRemoveMatchButton}
        </S.StyledActionButton>
        <S.StyledActionButton color="secondary" onClick={handleSendEmail}>
          {translations.componentDashboardMatchesProfileDetailsPreviewModalContentSendEmailButton}
        </S.StyledActionButton>
      </S.StyledActionsWrapper>
    </S.StyledWrapper>
  );
};
