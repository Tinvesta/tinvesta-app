import { Icon, Typography } from '@mui/material';

import S from './profile-details-preview-label.styles';
import { IProfileDetailsPreviewLabelProps } from './profile-details-preview-label.types';

export const ProfileDetailsPreviewLabel = ({
  children,
  icon,
  label,
}: IProfileDetailsPreviewLabelProps): JSX.Element | null => {
  if (!children) {
    return null;
  }

  return (
    <S.StyledWrapper>
      <S.StyledHeader>
        <Icon color="primary">{icon}</Icon>
        <Typography variant="body2">{label}</Typography>
      </S.StyledHeader>
      <Typography variant="body2">
        <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
      </Typography>
    </S.StyledWrapper>
  );
};
