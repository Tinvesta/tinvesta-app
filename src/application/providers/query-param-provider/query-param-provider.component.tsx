import { NextAdapter } from 'next-query-params';
import React, { memo } from 'react';
import { QueryParamProvider as QueryParamProviderWrapper } from 'use-query-params';

import { TQueryParamProviderProps } from './query-param-provider.types';

const QueryParamProviderComponent = ({
  children,
  shallow,
  ...restProps
}: TQueryParamProviderProps): JSX.Element => (
  <QueryParamProviderWrapper {...restProps} adapter={NextAdapter}>
    {children}
  </QueryParamProviderWrapper>
);

export const QueryParamProvider = memo(QueryParamProviderComponent);
