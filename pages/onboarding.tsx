import { onboardingPage } from '@application';

const { getServerSideProps, OnboardingPage } = onboardingPage;

// eslint-disable-next-line no-restricted-exports
export { OnboardingPage as default, getServerSideProps };
