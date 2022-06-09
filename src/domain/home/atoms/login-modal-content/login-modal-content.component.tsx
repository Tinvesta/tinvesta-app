import { GitHub as GitHubIcon, Google as GoogleIcon } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

import { useTranslation, useUser } from '@utils';

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

  return (
    <S.StyledWrapper>
      <Typography align="center" variant="body1">
        {translations.componentHomeModalInfo}
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
