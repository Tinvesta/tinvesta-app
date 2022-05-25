import { ApiError, Provider, Session, User } from '@supabase/supabase-js';

export interface IUser extends User {
  client_type_id?: number;
  company_name?: string;
  contact_email?: string;
  first_name?: string;
  focus_markets?: number[];
  industrial_sectors?: number[];
  interval?: string;
  investment_sizes?: number[];
  investment_stage_types?: number[];
  investor_demand_types?: number[];
  investor_profile_type_id?: number;
  is_subscribed?: boolean;
  last_name?: string;
  likes_counter?: {
    count?: number;
    created_at?: string;
  };
  location?: string;
  mission_statement?: string;
  profile_avatar_url?: string;
  startup_claim?: string;
  startup_profile_creator_type_id?: number;
  startup_sectors?: number[];
  stripe_customer?: string;
  team_sizes?: number[];
  vision_statement?: string;
  why_startup_should_match_with_you?: string;
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
