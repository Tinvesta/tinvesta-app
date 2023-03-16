import React, { memo } from 'react';
import { QueryParamProvider as QueryParamProviderWrapper } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { TQueryParamProviderProps } from './query-param-provider.types';

const QueryParamProviderComponent = ({
  children,
  shallow,
  ...restProps
}: TQueryParamProviderProps): JSX.Element => (
  <QueryParamProviderWrapper {...restProps} adapter={ReactRouter6Adapter}>
    {children}
  </QueryParamProviderWrapper>
);

export const QueryParamProvider = memo(QueryParamProviderComponent);
