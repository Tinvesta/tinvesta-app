import { Icon, Typography } from '@mui/material';
import { Children } from 'react';

import S from './profile-details-preview-label.styles';
import { IProfileDetailsPreviewLabelProps } from './profile-details-preview-label.types';

export const ProfileDetailsPreviewLabel = ({
  children,
  icon,
  label,
}: IProfileDetailsPreviewLabelProps): JSX.Element | null => {
  const parsedChildren = Children.toArray(children).filter(Boolean);

  if (parsedChildren.length === 0) {
    return null;
  }

  return (
    <S.StyledWrapper>
      <S.StyledHeader>
        <Icon color="secondary">{icon}</Icon>
        <Typography
          align="left"
          color="secondary"
          fontWeight={900}
          sx={{ textTransform: 'uppercase' }}
          variant="body2"
        >
          {label}
        </Typography>
      </S.StyledHeader>
      <S.StyledContentWrapper align="left" variant="body2">
        {children}
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
