import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { getBottomNavigationOptions, translationStrings } from './mobile-dashboard.defaults';
import S from './mobile-dashboard.styles';
import { IMobileDashboardLayoutProps } from './mobile-dashboard.types';

export const MobileDashboardLayout = ({ children }: IMobileDashboardLayoutProps): JSX.Element => {
  const router = useRouter();
  const translations = useTranslation(translationStrings);

  const isActiveOption = (route: ERoutes): boolean => router.pathname === route;

  const bottomNavigationOptions = getBottomNavigationOptions(translations);

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
            <Link key={_bottomNavigationOption.label} passHref href={_bottomNavigationOption.route}>
              <S.StyledBottomNavigationAction
                active={isActive}
                icon={_bottomNavigationOption.icon}
                label={_bottomNavigationOption.label}
                showLabel={isActive}
              />
            </Link>
          );
        })}
      </S.StyledBottomNavigation>
    </S.StyledWrapper>
  );
};
