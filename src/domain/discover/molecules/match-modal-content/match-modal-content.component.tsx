import { Button } from '@mui/material';

import S from './match-modal-content.styles';
import { IMatchModalContentProps } from './match-modal-content.types';

export const MatchModalContent = ({ onClose }: IMatchModalContentProps): JSX.Element => (
  <S.StyledWrapper>
    <Button onClick={onClose}>Close</Button>
  </S.StyledWrapper>
);
