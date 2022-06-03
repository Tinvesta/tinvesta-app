import {
  CloseOutlined as CloseOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from '@mui/icons-material';

import S from './profile-card-action-buttons.styles';
import { IProfileCardActionButtonsProps } from './profile-card-action-buttons.types';

export const ProfileCardActionButtons = ({
  markAsNotVoted,
  markAsVoted,
}: IProfileCardActionButtonsProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledCloseOutlinedIconButtonWrapper color="error" onClick={markAsNotVoted}>
      <CloseOutlinedIcon />
    </S.StyledCloseOutlinedIconButtonWrapper>
    <S.StyledFavouriteIconButtonWrapper color="success" onClick={markAsVoted}>
      <FavoriteOutlinedIcon />
    </S.StyledFavouriteIconButtonWrapper>
  </S.StyledWrapper>
);
