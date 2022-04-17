import { dashboardLikesPage } from '@application';

const { getServerSideProps, LikesPage } = dashboardLikesPage;

// eslint-disable-next-line no-restricted-exports
export { LikesPage as default, getServerSideProps };
