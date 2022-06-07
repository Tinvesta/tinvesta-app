import { Typography } from '@mui/material';
import Image from 'next/image';

import S from './footer.styles';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <S.StyledWrapper>
      <S.StyledMinWidthContainer>
        <S.StyledTitle fontWeight={900} variant="h1">
          It&apos;s free. Start matching!
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
              Legal
            </S.StyledFooterLinksTitle>
            <Typography>Terms & Conditions</Typography>
            <Typography>Privacy Policy</Typography>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              Get in touch
            </S.StyledFooterLinksTitle>
            <Typography>pawel.wojtasinski.1995@gmail.com</Typography>
          </S.StyledFooterLinksColumn>
          <S.StyledFooterLinksColumn>
            <S.StyledFooterLinksTitle fontWeight={900} variant="h6">
              Follow me
            </S.StyledFooterLinksTitle>
            <Typography>LinkedIn</Typography>
            <Typography>Twitter</Typography>
            <Typography>GitHub</Typography>
          </S.StyledFooterLinksColumn>
        </S.StyledFooterContainer>
      </S.StyledMinWidthContainer>
    </S.StyledWrapper>
  );
};
