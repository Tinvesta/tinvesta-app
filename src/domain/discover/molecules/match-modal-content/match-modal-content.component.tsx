import { Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Loading } from '@ui';

import { useDeviceDetect, useTranslation } from '@utils';

import { translationStrings } from './match-modal-content.defaults';
import S from './match-modal-content.styles';
import { IMatchModalContentProps } from './match-modal-content.types';

export const MatchModalContent = ({
  likedProfileDetails,
  loggedProfileDetails,
  onClose,
}: IMatchModalContentProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const [copied, setCopied] = useState(false);
  const translations = useTranslation(translationStrings);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  if (!likedProfileDetails || !loggedProfileDetails) {
    return <Loading />;
  }

  const sendEmail = () =>
    window.open(`mailto:${likedProfileDetails.contactEmail}?subject=Tinvesta -`);

  const onCopy = () => setCopied(true);

  const getHeadingVariant = () => {
    if (deviceData.isSmallerThanXS) {
      return 'h4';
    }

    if (deviceData.isSmallerThanSM) {
      return 'h3';
    }

    return 'h2';
  };

  const buttonSize = deviceData.isSmallerThanXS ? 'medium' : 'large';

  return (
    <S.StyledWrapper>
      <Typography variant={getHeadingVariant()}>
        {translations.componentDashboardDiscoverMatchModalContentHeader}
      </Typography>
      <S.StyledImageContainer>
        <S.StyledImageWrapper>
          <Image
            alt={translations.componentDashboardDiscoverMatchModalContentLoggedUserImageAlt}
            height={450}
            objectFit="cover"
            src={loggedProfileDetails?.avatars[0]}
            width={300}
          />
        </S.StyledImageWrapper>
        <S.StyledImageWrapper>
          <Image
            alt={translations.componentDashboardDiscoverMatchModalContentLikedUserImageAlt}
            height={450}
            objectFit="cover"
            src={likedProfileDetails.avatars[0]}
            width={300}
          />
        </S.StyledImageWrapper>
      </S.StyledImageContainer>
      <S.StyledButtonsWrapper>
        <S.StyledButton color="secondary" size={buttonSize} variant="contained" onClick={sendEmail}>
          {translations.componentDashboardDiscoverMatchModalContentButtonsSendEmail}
        </S.StyledButton>
        <CopyToClipboard text={likedProfileDetails.contactEmail} onCopy={onCopy}>
          <S.StyledButton color="secondary" disabled={copied} size={buttonSize} variant="contained">
            {translations.componentDashboardDiscoverMatchModalContentButtonsClipboard}
          </S.StyledButton>
        </CopyToClipboard>
        <S.StyledButton color="secondary" size={buttonSize} variant="outlined" onClick={onClose}>
          {translations.componentDashboardDiscoverMatchModalContentButtonsKeepSwiping}
        </S.StyledButton>
      </S.StyledButtonsWrapper>
    </S.StyledWrapper>
  );
};
