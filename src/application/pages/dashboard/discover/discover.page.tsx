import { Discover } from '@domain';

import { DesktopDashboardLayout } from '../layouts';
import { IDiscoverPageProps } from './discover.types';

export const DiscoverPage = ({ startups }: IDiscoverPageProps): JSX.Element => {
  console.log(startups);

  return <Discover />;
};

DiscoverPage.Layout = DesktopDashboardLayout;

export { getServerSideProps } from '../utils';
