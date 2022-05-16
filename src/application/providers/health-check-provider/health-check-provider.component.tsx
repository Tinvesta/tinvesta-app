import { useEffect } from 'react';

import { Loading } from '@ui';

import { useHealthCheckActionQuery } from '@utils';

import { internalServerErrorPage } from '../../pages';
import { IHealthCheckProviderProps } from './health-check-provider.types';

const { InternalServerErrorPage } = internalServerErrorPage;

export const HealthCheckProvider = ({ children }: IHealthCheckProviderProps): JSX.Element => {
  const { data, isError, isLoading, mutate } = useHealthCheckActionQuery();

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading || !data?.data) {
    return <Loading />;
  }

  if (isError) {
    return <InternalServerErrorPage />;
  }

  return <>{children}</>;
};
