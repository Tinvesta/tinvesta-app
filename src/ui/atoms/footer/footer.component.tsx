import { Typography } from '@mui/material';
import Image from 'next/image';

import { useTranslation } from '@utils';

import { translationStrings } from './footer.defaults';
import S from './footer.styles';

export const Footer = (): JSX.Element => {
  const translations = useTranslation(translationStrings);

  const currentYear = new Date().getUTCFullYear();

  return (
    <S.StyledWrapper>
      <S.StyledMinWidthContainer>
        <S.StyledTitle fontWeight={900} variant="h1">
          {translations.componentFooterHeader}
        </S.StyledTitle>
        <S.StyledFooterContainer>
          <S.StyledFooterLeft>
            <span>
              <Image
                priority
                alt="Tinvesta"
                height={50}
                objectFit="fill"
                src="/images/brandmark-transparent-white.png"
                style={{ cursor: 'pointer' }}
                width={50}
              />
            </span>
            <Typography>&#169; {currentYear} Tinvesta</Typography>
          </S.StyledFooterLeft>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              {translations.componentFooterLinksFirstTitle}
            </S.StyledFooterLinksTitle>
            <Typography>{translations.componentFooterLinksFirstOptionOne}</Typography>
            <Typography>{translations.componentFooterLinksFirstOptionTwo}</Typography>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              {translations.componentFooterLinksSecondTitle}
            </S.StyledFooterLinksTitle>
            <Typography>{translations.componentFooterLinksSecondOptionOne}</Typography>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              {translations.componentFooterLinksThirdTitle}
            </S.StyledFooterLinksTitle>
            <Typography>{translations.componentFooterLinksThirdOptionOne}</Typography>
            <Typography>{translations.componentFooterLinksThirdOptionTwo}</Typography>
            <Typography>{translations.componentFooterLinksThirdOptionThree}</Typography>
          </S.StyledFooterLinksColumn>
        </S.StyledFooterContainer>
      </S.StyledMinWidthContainer>
    </S.StyledWrapper>
  );
};
