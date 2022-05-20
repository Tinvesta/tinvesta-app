import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';

import { ProfileDetailsPreview } from '@ui';

import { sendEmail, useDeviceDetect, useTranslation } from '@utils';

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

  const getButtonSize = () => {
    if (deviceData.isSmallerThanXS) {
      return 'small';
    }

    if (deviceData.isSmallerThanSM) {
      return 'medium';
    }

    return 'large';
  };

  const buttonSize = getButtonSize();

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
        <LoadingButton
          color="error"
          fullWidth={deviceData.isSmallerThanXS}
          loading={isLoading}
          size={buttonSize}
          variant="outlined"
          onClick={onRemoveMatchClick}
        >
          {translations.componentDashboardMatchesProfileDetailsPreviewModalContentRemoveMatchButton}
        </LoadingButton>
        <Button
          color="secondary"
          fullWidth={deviceData.isSmallerThanXS}
          size={buttonSize}
          variant="contained"
          onClick={handleSendEmail}
        >
          {translations.componentDashboardMatchesProfileDetailsPreviewModalContentSendEmailButton}
        </Button>
      </S.StyledActionsWrapper>
    </S.StyledWrapper>
  );
};
