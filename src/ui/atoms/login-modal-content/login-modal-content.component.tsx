import {
  GitHub as GitHubIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useOnlineState } from 'beautiful-react-hooks';

import { replaceVariablesInTranslation, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './login-modal-content.defaults';
import S from './login-modal-content.styles';

export const LoginModalContent = (): JSX.Element => {
  const isOnline = useOnlineState();
  const translations = useTranslation(translationStrings);
  const { loginViaGithubProvider, loginViaGoogleProvider, loginViaLinkedInProvider } = useUser();

  const loginIn = (provider: 'github' | 'google' | 'linkedin') => async () => {
    if (provider === 'github') {
      return loginViaGithubProvider();
    }

    if (provider === 'google') {
      return loginViaGoogleProvider();
    }

    loginViaLinkedInProvider();
  };

  const parsedModalInfo = replaceVariablesInTranslation(
    translations.componentHomeModalInfo,
    `<a href="${ERoutes.PRIVACY_POLICY}" style="text-decoration:none;color:#EAEAEA;font-weight:900;border-bottom:1px solid;">${translations.componentHomeModalPrivacyAndPolicy}</a>`,
    `<a href="${ERoutes.TERMS}" style="text-decoration:none;color:#EAEAEA;font-weight:900;border-bottom:1px solid;">${translations.componentHomeModalTermsAndConditions}</a>`,
  );

  return (
    <S.StyledWrapper>
      <Typography
        align="center"
        color="secondary"
        dangerouslySetInnerHTML={{ __html: parsedModalInfo }}
        variant="body1"
      />
      <S.StyledButtonsWrapper>
        <Button
          color="secondary"
          disabled={!isOnline}
          startIcon={<GoogleIcon />}
          variant="outlined"
          onClick={loginIn('google')}
        >
          {translations.componentHomeModalLoginViaGoogleButton}
        </Button>
        <Button
          color="secondary"
          disabled={!isOnline}
          startIcon={<GitHubIcon />}
          variant="outlined"
          onClick={loginIn('github')}
        >
          {translations.componentHomeModalLoginViaGithubButton}
        </Button>
        <Button
          color="secondary"
          disabled={!isOnline}
          startIcon={<LinkedInIcon />}
          variant="outlined"
          onClick={loginIn('linkedin')}
        >
          {translations.componentHomeModalLoginViaLinkedinButton}
        </Button>
      </S.StyledButtonsWrapper>
    </S.StyledWrapper>
  );
};
