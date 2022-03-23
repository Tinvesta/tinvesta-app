import { User } from '@supabase/supabase-js';

export interface IUser extends User {
  is_subscribed?: boolean;
}

export interface IUserContextValue {
  isLoading: boolean;
  loginViaGithubProvider: () => void;
  loginViaGoogleProvider: () => void;
  logout: () => void;
  user: IUser | null;
}
