import { Button } from '@mui/material';

import { ProfileDetailsPreview } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './profile-details-preview-modal-content.styles';
import { IProfileDetailsPreviewModalContentProps } from './profile-details-preview-modal-content.types';

export const ProfileDetailsPreviewModalContent = ({
  onCloseIconClick,
  selectedProfile,
  ...restProps
}: IProfileDetailsPreviewModalContentProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const sendEmail = () => window.open(`mailto:${selectedProfile!.contactEmail}?subject=Tinvesta -`);

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
        <Button color="error" size={buttonSize} variant="outlined">
          Remove match
        </Button>
        <Button color="secondary" size={buttonSize} variant="contained" onClick={sendEmail}>
          Send an email
        </Button>
      </S.StyledActionsWrapper>
    </S.StyledWrapper>
  );
};
