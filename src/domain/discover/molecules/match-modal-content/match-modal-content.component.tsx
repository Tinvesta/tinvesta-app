import { Typography } from '@mui/material';
import Image from 'next/image';

import { Loading } from '@ui';

import S from './match-modal-content.styles';
import { IMatchModalContentProps } from './match-modal-content.types';

export const MatchModalContent = ({
  likedProfileDetails,
  loggedProfileDetails,
  onClose,
}: IMatchModalContentProps): JSX.Element => {
  if (!likedProfileDetails || !loggedProfileDetails) {
    return <Loading />;
  }

  return (
    <S.StyledWrapper>
      <Typography variant="h2">It&apos;s a match!</Typography>
      <S.StyledImageContainer>
        <S.StyledImageWrapper>
          <Image
            alt="Profile image"
            height={450}
            objectFit="cover"
            src={loggedProfileDetails?.avatars[0]}
            width={300}
          />
        </S.StyledImageWrapper>
        <S.StyledImageWrapper>
          <Image
            alt="Profile image"
            height={450}
            objectFit="cover"
            src={likedProfileDetails.avatars[0]}
            width={300}
          />
        </S.StyledImageWrapper>
      </S.StyledImageContainer>
      <S.StyledButton size="large" variant="contained" onClick={onClose}>
        Write an email
      </S.StyledButton>
      <S.StyledButton size="large" variant="outlined" onClick={onClose}>
        Keep swiping
      </S.StyledButton>
    </S.StyledWrapper>
  );
};
