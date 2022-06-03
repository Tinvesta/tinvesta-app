import { Children } from 'react';

import S from './profile-details-preview-label.styles';
import { IProfileDetailsPreviewLabelProps } from './profile-details-preview-label.types';

export const ProfileDetailsPreviewLabel = ({
  children,
  label,
}: IProfileDetailsPreviewLabelProps): JSX.Element | null => {
  const parsedChildren = Children.toArray(children).filter(Boolean);

  if (parsedChildren.length === 0) {
    return null;
  }

  return (
    <S.StyledWrapper>
      <S.StyledTitle color="secondary" fontWeight={900} variant="body2">
        {label}
      </S.StyledTitle>
      <S.StyledContentWrapper variant="body2">{children}</S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
