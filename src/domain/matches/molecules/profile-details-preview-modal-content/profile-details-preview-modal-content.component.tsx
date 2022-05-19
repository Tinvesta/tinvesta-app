import { ProfileDetailsPreview } from '@ui';

import S from './profile-details-preview-modal-content.styles';
import { IProfileDetailsPreviewModalContentProps } from './profile-details-preview-modal-content.types';

export const ProfileDetailsPreviewModalContent = ({
  onCloseIconClick,
  selectedProfile,
  ...restProps
}: IProfileDetailsPreviewModalContentProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledHeader>
      <S.StyledCloseIcon fontSize="large" onClick={onCloseIconClick} />
    </S.StyledHeader>
    <ProfileDetailsPreview
      {...restProps}
      // @ts-expect-error
      profileDetails={selectedProfile}
    />
  </S.StyledWrapper>
);
