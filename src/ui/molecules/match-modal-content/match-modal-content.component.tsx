import { Typography } from '@mui/material';
import Image from 'next/image';
import { useDeviceDetect } from 'use-device-detect';

import { Loading, useCopyToClipboard } from '@ui';

import { sendEmail, useTranslation } from '@utils';

import { translationStrings } from './match-modal-content.defaults';
import S from './match-modal-content.styles';
import { IMatchModalContentProps } from './match-modal-content.types';

export const MatchModalContent = ({
  closeButtonLabel,
  likedProfileDetails,
  loggedProfileDetails,
  onClose,
}: IMatchModalContentProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);
  const { copied, CopyToClipboard } = useCopyToClipboard();

  if (!likedProfileDetails || !loggedProfileDetails) {
    return <Loading />;
  }

  const handleSendEmail = () => sendEmail(likedProfileDetails.contactEmail);

  const getHeadingVariant = () => {
    if (deviceData.isSmallerThanXS) {
      return 'h4';
    }

    if (deviceData.isSmallerThanSM) {
      return 'h3';
    }

    return 'h2';
  };

  const buttonSize = deviceData.isSmallerThanXS ? 'small' : 'medium';

  return (
    <S.StyledWrapper>
      <Typography color="secondary" variant={getHeadingVariant()}>
        {translations.componentDashboardDiscoverMatchModalContentHeader}
      </Typography>
      <S.StyledImageContainer>
        <S.StyledImageWrapper rotationDirection="left">
          <Image
            alt={translations.componentDashboardDiscoverMatchModalContentLoggedUserImageAlt}
            height={450}
            src={loggedProfileDetails?.avatars[0]}
            width={300}
          />
        </S.StyledImageWrapper>
        <S.StyledImageWrapper rotationDirection="right">
          <Image
            alt={translations.componentDashboardDiscoverMatchModalContentLikedUserImageAlt}
            height={450}
            src={likedProfileDetails.avatars[0]}
            width={300}
          />
        </S.StyledImageWrapper>
      </S.StyledImageContainer>
      <S.StyledButtonsWrapper>
        <S.StyledButton
          color="info"
          size={buttonSize}
          variant="contained"
          onClick={handleSendEmail}
        >
          {translations.componentDashboardDiscoverMatchModalContentButtonsSendEmail}
        </S.StyledButton>
        <CopyToClipboard text={likedProfileDetails.contactEmail}>
          <S.StyledButton color="info" disabled={copied} size={buttonSize} variant="contained">
            {translations.componentDashboardDiscoverMatchModalContentButtonsClipboard}
          </S.StyledButton>
        </CopyToClipboard>
        <S.StyledButton color="secondary" size={buttonSize} variant="outlined" onClick={onClose}>
          {closeButtonLabel ||
            translations.componentDashboardDiscoverMatchModalContentButtonsKeepSwiping}
        </S.StyledButton>
      </S.StyledButtonsWrapper>
    </S.StyledWrapper>
  );
};
