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

  const sendEmail = () =>
    // @ts-expect-error
    window.open(`mailto:${selectedProfile.contactEmail}?subject=Tinvesta -`);

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
        <Button color="error" size="large" variant="outlined">
          Remove match
        </Button>
        <Button color="secondary" size="large" variant="contained" onClick={sendEmail}>
          Send an email
        </Button>
      </S.StyledActionsWrapper>
    </S.StyledWrapper>
  );
};
