import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ERoutes } from '@enums';

import { bottomNavigationOptions } from './mobile-dashboard.defaults';
import S from './mobile-dashboard.styles';
import { IMobileDashboardLayoutProps } from './mobile-dashboard.types';

export const MobileDashboardLayout = ({ children }: IMobileDashboardLayoutProps): JSX.Element => {
  const router = useRouter();

  const isActiveOption = (route: ERoutes): boolean => router.pathname === route;

  return (
    <S.StyledWrapper>
      <Head>
        <title>Tinvesta</title>
      </Head>
      <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
      <S.StyledBottomNavigation>
        {bottomNavigationOptions.map((_bottomNavigationOption) => {
          const isActive = isActiveOption(_bottomNavigationOption.route);

          return (
            <Link key={_bottomNavigationOption.route} passHref href={_bottomNavigationOption.route}>
              <S.StyledBottomNavigationAction
                active={isActive}
                icon={_bottomNavigationOption.icon}
              />
            </Link>
          );
        })}
      </S.StyledBottomNavigation>
    </S.StyledWrapper>
  );
};
