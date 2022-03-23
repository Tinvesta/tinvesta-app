import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { IUser, UserContext, supabaseInstance } from '@infrastructure';

import { IUserProviderProps } from './user-provider.types';

export const UserProvider = ({ children }: IUserProviderProps): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(supabaseInstance.auth.user());

  const getUserProfile = async () => {
    const sessionUser = supabaseInstance.auth.user();

    if (sessionUser) {
      const { data: profile } = await supabaseInstance
        .from('profiles')
        .select('*')
        .eq('id', sessionUser.id)
        .single();

      setUser({
        ...sessionUser,
        ...profile,
      });

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();

    supabaseInstance.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  const loginViaGithubProvider = () =>
    supabaseInstance.auth.signIn({
      provider: 'github',
    });

  const loginViaGoogleProvider = () =>
    supabaseInstance.auth.signIn({
      provider: 'google',
    });

  const logout = () =>
    supabaseInstance.auth.signOut().then(() => {
      setUser(null);
      router.push('/');
    });

  const providerValue = {
    user,
    logout,
    isLoading,
    loginViaGithubProvider,
    loginViaGoogleProvider,
  };

  return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>;
};