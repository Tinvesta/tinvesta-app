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
        <a
          href="https://www.producthunt.com/posts/tinvesta?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tinvesta"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Tinvesta - One&#0032;swipe&#0032;away&#0032;from&#0032;finding&#0032;the&#0032;new&#0032;business&#0032;partner | Product Hunt"
            height="54"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=349272&theme=light"
            style={{ width: '250px', height: '54px' }}
            width="250"
          />
        </a>
        <S.StyledTitle
          align="center"
          fontWeight={900}
          variant={deviceData.isSmallerThanXS ? 'h3' : 'h2'}
        >
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
            <S.StyledFooterLinksTitle
              fontWeight={900}
              variant={deviceData.isSmallerThanXS ? 'body1' : 'h6'}
            >
              {translations.componentFooterLinksFirstTitle}
            </S.StyledFooterLinksTitle>
            <Link href={ERoutes.PRIVACY_POLICY}>
              <S.StyledFooterLinksLink variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}>
                {translations.componentFooterLinksFirstOptionOne}
              </S.StyledFooterLinksLink>
            </Link>
            <Link href={ERoutes.TERMS}>
              <S.StyledFooterLinksLink variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}>
                {translations.componentFooterLinksFirstOptionTwo}
              </S.StyledFooterLinksLink>
            </Link>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle
              fontWeight={900}
              variant={deviceData.isSmallerThanXS ? 'body1' : 'h6'}
            >
              {translations.componentFooterLinksSecondTitle}
            </S.StyledFooterLinksTitle>
            <S.StyledFooterLinksLink
              variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
              onClick={onEmailClick}
            >
              {translations.componentFooterLinksSecondOptionOne}
            </S.StyledFooterLinksLink>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle
              fontWeight={900}
              variant={deviceData.isSmallerThanXS ? 'body1' : 'h6'}
            >
              {translations.componentFooterLinksThirdTitle}
            </S.StyledFooterLinksTitle>
            <S.StyledExternalLink
              href="https://github.com/playerony"
              rel="external nofollow noopener noreferrer"
              target="_blank"
            >
              <S.StyledFooterLinksLink variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}>
                {translations.componentFooterLinksThirdOptionOne}
              </S.StyledFooterLinksLink>
            </S.StyledExternalLink>
            <S.StyledExternalLink
              href="https://twitter.com/WojtasinskiPawe"
              rel="external nofollow noopener noreferrer"
              target="_blank"
            >
              <S.StyledFooterLinksLink variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}>
                {translations.componentFooterLinksThirdOptionTwo}
              </S.StyledFooterLinksLink>
            </S.StyledExternalLink>
            <S.StyledExternalLink
              href="https://www.linkedin.com/in/pwojtasinski"
              rel="external nofollow noopener noreferrer"
              target="_blank"
            >
              <S.StyledFooterLinksLink variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}>
                {translations.componentFooterLinksThirdOptionThree}
              </S.StyledFooterLinksLink>
            </S.StyledExternalLink>
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
