import { useEffect } from 'react';

import { Loading } from '@ui';

import { useHealthCheckActionQuery } from '@utils';

import { IHealthCheckProviderProps } from './health-check-provider.types';

export const HealthCheckProvider = ({ children }: IHealthCheckProviderProps): JSX.Element => {
  const { data, isError, isLoading, mutate } = useHealthCheckActionQuery();

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading || !data?.data) {
    return <Loading />;
  }

  // TODO - add proper error
  if (isError) {
    return <div>ERROR</div>;
  }

  return <>{children}</>;
};