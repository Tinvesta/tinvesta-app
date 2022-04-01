import { Button } from '@mui/material';

import { useUser } from '@utils';

import S from './sign-in-modal-content.styles';

export const SignInModalContent = (): JSX.Element => {
  const { loginViaGithubProvider, loginViaGoogleProvider } = useUser();

  const signIn = (provider: 'github' | 'google') => async () => {
    if (provider === 'github') {
      return loginViaGithubProvider();
    }

    loginViaGoogleProvider();
  };

  return (
    <S.StyledWrapper>
      <Button variant="outlined" onClick={signIn('google')}>
        Sign in with github
      </Button>
      <Button variant="outlined" onClick={signIn('github')}>
        Sign in with google
      </Button>
    </S.StyledWrapper>
  );
};
