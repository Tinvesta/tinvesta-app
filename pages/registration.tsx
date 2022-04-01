import { registrationPage } from '@application';

const { getServerSideProps, RegistrationPage } = registrationPage;

// eslint-disable-next-line no-restricted-exports
export { RegistrationPage as default, getServerSideProps };
