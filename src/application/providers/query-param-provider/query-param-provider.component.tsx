import { useRouter } from 'next/router';
import React, { memo, useMemo } from 'react';
import { QueryParamProvider as QueryParamProviderWrapper } from 'use-query-params';

import { TQueryParamProviderProps } from './query-param-provider.types';

const pathnameRegex = /[^?#]+/u;

const QueryParamProviderComponent = ({
  children,
  shallow,
  ...restProps
}: TQueryParamProviderProps): JSX.Element => {
  const router = useRouter();
  const match = router.asPath.match(pathnameRegex);
  const pathname = match ? match[0] : router.asPath;

  const location = useMemo(() => {
    if (typeof window !== 'undefined') {
      // For SSG, no query parameters are available on the server side,
      // since they can't be known at build time. Therefore to avoid
      // markup mismatches, we need a two-part render in this case that
      // patches the client with the updated query parameters lazily.
      // Note that for SSR `router.isReady` will be `true` immediately
      // and therefore there's no two-part render in this case.
      if (router.isReady) {
        return window.location;
      }

      return { search: '' } as Location;
    }

    // On the server side we only need a subset of the available
    // properties of `Location`. The other ones are only necessary
    // for interactive features on the client.
    return { search: router.asPath.replace(pathnameRegex, '') } as Location;
  }, [router.asPath, router.isReady]);

  const history = useMemo(() => {
    function createUpdater(routeFn: typeof router.push) {
      return function updater({ hash, search }: Location) {
        routeFn(
          { pathname: router.pathname, search, hash },
          { pathname, search, hash },
          { shallow, scroll: false },
        );
      };
    }

    return {
      push: createUpdater(router.push),
      replace: createUpdater(router.replace),
      location,
    };
  }, [location, pathname, router, shallow]);

  return (
    <QueryParamProviderWrapper {...restProps} history={history} location={location}>
      {children}
    </QueryParamProviderWrapper>
  );
};

export const QueryParamProvider = memo(QueryParamProviderComponent);
