import { GetServerSideProps } from 'next';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

// @ts-expect-error
export const verifyUserAccess = async ({ req }: GetServerSideProps) => {
  const { user } = await supabaseInstance.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: ERoutes.HOME,
      },
      props: {},
    };
  }

  const { data: profileData } = await supabaseInstance
    .from('profiles')
    .select('client_type_id')
    .eq('id', user.id)
    .single();

  if (!profileData.client_type_id) {
    return {
      redirect: {
        permanent: false,
        destination: ERoutes.ONBOARDING,
      },
      props: {},
    };
  }

  return {
    user,
    profileData,
  };
};
