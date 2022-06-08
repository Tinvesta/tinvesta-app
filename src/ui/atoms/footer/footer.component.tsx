import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { sendEmail, useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './footer.defaults';
import S from './footer.styles';

export const Footer = (): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const currentYear = new Date().getUTCFullYear();

  const onEmailClick = () => sendEmail(translations.componentFooterLinksSecondOptionOne);

  return (
    <S.StyledWrapper>
      <S.StyledWidthContainer>
        <S.StyledTitle align="center" fontWeight={900} variant="h2">
          {translations.componentFooterHeader}
        </S.StyledTitle>
        <S.StyledFooterContainer>
          {!deviceData.isSmallerThanMD && (
            <S.StyledFooterLeft>
              <span>
                <Image
                  priority
                  alt="Tinvesta"
                  height={50}
                  objectFit="fill"
                  src="/images/brandmark-transparent-white.png"
                  width={50}
                />
              </span>
              <Typography>&#169; {currentYear} Tinvesta</Typography>
            </S.StyledFooterLeft>
          )}
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              {translations.componentFooterLinksFirstTitle}
            </S.StyledFooterLinksTitle>
            <Link href={ERoutes.PRIVACY_POLICY}>
              <S.StyledFooterLinksLink>
                {translations.componentFooterLinksFirstOptionOne}
              </S.StyledFooterLinksLink>
            </Link>
            <Link href={ERoutes.TERMS}>
              <S.StyledFooterLinksLink>
                {translations.componentFooterLinksFirstOptionTwo}
              </S.StyledFooterLinksLink>
            </Link>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              {translations.componentFooterLinksSecondTitle}
            </S.StyledFooterLinksTitle>
            <S.StyledFooterLinksLink onClick={onEmailClick}>
              {translations.componentFooterLinksSecondOptionOne}
            </S.StyledFooterLinksLink>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              {translations.componentFooterLinksThirdTitle}
            </S.StyledFooterLinksTitle>
            <Link href="https://github.com/playerony">
              <S.StyledFooterLinksLink>
                {translations.componentFooterLinksThirdOptionOne}
              </S.StyledFooterLinksLink>
            </Link>
            <Link href="https://twitter.com/WojtasinskiPawe">
              <S.StyledFooterLinksLink>
                {translations.componentFooterLinksThirdOptionTwo}
              </S.StyledFooterLinksLink>
            </Link>
            <Link href="https://www.linkedin.com/in/pwojtasinski">
              <S.StyledFooterLinksLink>
                {translations.componentFooterLinksThirdOptionThree}
              </S.StyledFooterLinksLink>
            </Link>
          </S.StyledFooterLinksColumn>
          {deviceData.isSmallerThanMD && (
            <S.StyledFooterLeft>
              <span>
                <Image
                  priority
                  alt="Tinvesta"
                  height={50}
                  objectFit="fill"
                  src="/images/brandmark-transparent-white.png"
                  width={50}
                />
              </span>
              <Typography>&#169; {currentYear} Tinvesta</Typography>
            </S.StyledFooterLeft>
          )}
        </S.StyledFooterContainer>
      </S.StyledWidthContainer>
    </S.StyledWrapper>
  );
};
