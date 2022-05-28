import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { Loading } from '@ui';

import { internalServerErrorPage } from '../../pages';
import { healthCheckAction } from './api';
import { IHealthCheckProviderProps } from './health-check-provider.types';

export const HealthCheckProvider = ({ children }: IHealthCheckProviderProps): JSX.Element => {
  const { data, isError, isLoading, mutate } = useMutation(healthCheckAction);

  const { InternalServerErrorPage } = internalServerErrorPage;

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading || (!isLoading && !data?.data)) {
    return <Loading />;
  }

  if (isError) {
    return <InternalServerErrorPage />;
  }

  return <>{children}</>;
};
