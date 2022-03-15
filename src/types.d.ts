/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_ENV: 'test' | 'local' | 'staging' | 'production';
  }
}
