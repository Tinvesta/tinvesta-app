import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { IUser, UserContext, supabaseInstance } from '@infrastructure';

import { EApiEndpoint, ERoutes } from '@enums';

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

      const { data: likes_counter } = await supabaseInstance
        .from('likes_counter')
        .select('count,created_at')
        .eq('profile_id', sessionUser.id);

      setUser({
        likes_counter: likes_counter ? likes_counter[0] : null,
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

  useEffect(() => {
    if (user) {
      const subscription = supabaseInstance
        .from(`subscriptions:profile_id=eq.${user.id}`)
        .on('UPDATE', (payload) => {
          setUser({
            ...user,
            interval: payload.new.interval,
            is_subscribed: payload.new.is_subscribed,
            stripe_customer: payload.new.stripe_customer,
          });
        })
        .subscribe();

      return () => {
        supabaseInstance.removeSubscription(subscription);
      };
    }
  }, [user]);

  const loginViaGithubProvider = () =>
    supabaseInstance.auth.signIn(
      {
        provider: 'github',
      },
      {
        redirectTo: `${window.location.origin}?redirect=dashboard`,
      },
    );

  const loginViaGoogleProvider = () =>
    supabaseInstance.auth.signIn(
      {
        provider: 'google',
      },
      {
        redirectTo: `${window.location.origin}?redirect=dashboard`,
      },
    );

  const logout = () =>
    supabaseInstance.auth.signOut().then(() => {
      setUser(null);

      router.push(ERoutes.HOME);
    });

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        isLoading,
        loginViaGithubProvider,
        loginViaGoogleProvider,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
