import { GitHub as GitHubIcon, Google as GoogleIcon } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

import { replaceVariablesInTranslation, useTranslation, useUser } from '@utils';

import { translationStrings } from './login-modal-content.defaults';
import S from './login-modal-content.styles';

export const LoginModalContent = (): JSX.Element => {
  const translations = useTranslation(translationStrings);
  const { loginViaGithubProvider, loginViaGoogleProvider } = useUser();

  const loginIn = (provider: 'github' | 'google') => async () => {
    if (provider === 'github') {
      return loginViaGithubProvider();
    }

    loginViaGoogleProvider();
  };

  const parsedModalInfo = replaceVariablesInTranslation(
    translations.componentHomeModalInfo,
    'Privacy and Policy',
    'Terms and Conditions',
  );

  return (
    <S.StyledWrapper>
      <Typography align="center" color="secondary" variant="body1">
        {parsedModalInfo}
      </Typography>
      <S.StyledButtonsWrapper>
        <Button
          color="secondary"
          startIcon={<GoogleIcon />}
          variant="outlined"
          onClick={loginIn('google')}
        >
          {translations.componentHomeModalLoginViaGoogleButton}
        </Button>
        <Button
          color="secondary"
          startIcon={<GitHubIcon />}
          variant="outlined"
          onClick={loginIn('github')}
        >
          {translations.componentHomeModalLoginViaGithubButton}
        </Button>
      </S.StyledButtonsWrapper>
    </S.StyledWrapper>
  );
};
