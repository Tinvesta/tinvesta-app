import { Button } from '@mui/material';

import { useUser } from '@utils';

import S from './login-modal-content.styles';

export const LoginModalContent = (): JSX.Element => {
  const { loginViaGithubProvider, loginViaGoogleProvider } = useUser();

  const loginIn = (provider: 'github' | 'google') => async () => {
    if (provider === 'github') {
      return loginViaGithubProvider();
    }

    loginViaGoogleProvider();
  };

  return (
    <S.StyledWrapper>
      <Button color="secondary" variant="outlined" onClick={loginIn('google')}>
        Log in with google
      </Button>
      <Button color="secondary" variant="outlined" onClick={loginIn('github')}>
        Log in with github
      </Button>
    </S.StyledWrapper>
  );
};
