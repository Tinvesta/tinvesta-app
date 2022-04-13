import { ApiError, Provider, Session, User } from '@supabase/supabase-js';

export interface IUser extends User {
  avatar_id?: number;
  client_type_id?: number;
  company_name?: string;
  contact_email?: string;
  email?: string;
  first_name?: string;
  investor_profile_type_id?: number;
  is_subscribed?: boolean;
  last_name?: string;
  location?: string;
  mission_statement?: string;
  startup_claim?: string;
  startup_profile_creator_type_id?: number;
  vision_statement?: string;
  what_you_are_looking_for?: string;
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
