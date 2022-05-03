import { ComponentProps } from 'react';
import { QueryParamProvider } from 'use-query-params';

export type TQueryParamProviderProps = Omit<
  ComponentProps<typeof QueryParamProvider>,
  'ReactRouterRoute' | 'reachHistory' | 'history' | 'location'
> & { shallow?: boolean };
