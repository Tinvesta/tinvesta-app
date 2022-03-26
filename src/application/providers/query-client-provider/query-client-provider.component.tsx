import { QueryClient, QueryClientProvider as QueryClientProviderWrapper } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { IQueryClientProviderProps } from './query-client-provider.types';

const queryClient = new QueryClient();
const isDevelopment = process.env.NEXT_PUBLIC_APP_ENV === 'local';

export const QueryClientProvider = ({ children }: IQueryClientProviderProps): JSX.Element => (
  <QueryClientProviderWrapper client={queryClient}>
    {children}
    {isDevelopment ? <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> : null}
  </QueryClientProviderWrapper>
);
