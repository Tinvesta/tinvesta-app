import { EditProfileForm, FeedbackSection, SubscriptionPlans } from './molecules';
import { IProfileProps } from './profile.types';

export const Profile = ({ plans, ...restProps }: IProfileProps): JSX.Element => (
  <>
    <SubscriptionPlans plans={plans} />
    <FeedbackSection />
    <EditProfileForm {...restProps} />
  </>
);
