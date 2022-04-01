import { ApiError, Provider, Session, User } from '@supabase/supabase-js';

export interface IUser extends User {
  is_subscribed?: boolean;
}

export type TProviderReturn = Promise<{
  error: ApiError | null;
  provider?: Provider;
  session: Session | null;
  url?: string | null;
  user: User | null;
}>;

export interface IUserContextValue {
  isLoading: boolean;
  loginViaGithubProvider: () => TProviderReturn;
  loginViaGoogleProvider: () => TProviderReturn;
  logout: () => void;
  user: IUser | null;
}
