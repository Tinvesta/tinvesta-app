import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { IUser, UserContext, supabaseInstance } from '@infrastructure';

import { EApiEndpoint, ERoutes } from '@enums';

import { STARTUP_CLIENT_TYPE_ID } from '@constants';

import { IUserProviderProps } from './user-provider.types';

export const UserProvider = ({ children }: IUserProviderProps): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(supabaseInstance.auth.user());

  const getUserProfile = async () => {
    const sessionUser = supabaseInstance.auth.user();

    if (sessionUser) {
      const { data: profileData } = await supabaseInstance
        .rpc('profile_details', {
          profile_id_input: sessionUser.id,
        })
        .single();

      setUser({
        ...sessionUser,
        ...profileData,
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

  useEffect(() => {
    axios.post(EApiEndpoint.SET_SUPABASE_COOKIE, {
      session: supabaseInstance.auth.session(),
      event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
    });
  }, [user]);

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

      router.push(ERoutes.RELEASE_DATE);
    });

  const isStartupProfile = () => user?.client_type_id === STARTUP_CLIENT_TYPE_ID;

  const providerValue = {
    user,
    logout,
    isLoading,
    isStartupProfile,
    loginViaGithubProvider,
    loginViaGoogleProvider,
  };

  return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>;
};
