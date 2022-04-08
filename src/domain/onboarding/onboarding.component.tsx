import { IOnboardingProps } from './onboarding.types';
import { DesktopOnboarding } from './organisms';

export const Onboarding = (props: IOnboardingProps): JSX.Element => (
  <DesktopOnboarding {...props} />
);
