import { dashboardProfilePage } from '@application';

const { getServerSideProps, ProfilePage } = dashboardProfilePage;

// eslint-disable-next-line no-restricted-exports
export { ProfilePage as default, getServerSideProps };
