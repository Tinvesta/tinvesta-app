declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ProcessEnv {
    NEXT_PUBLIC_API_ROUTE_SECRET: string;
    NEXT_PUBLIC_APP_ENV: 'test' | 'local' | 'staging' | 'production';
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_DEFAULT_LOCALE: string;
    NEXT_PUBLIC_MAPBOX_KEY: string;
    NEXT_PUBLIC_MAPBOX_URL: string;
    NEXT_PUBLIC_STRIPE_KEY: string;
    NEXT_PUBLIC_SUPABASE_KEY: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_SIGNING_SECRET: string;
  }
}
