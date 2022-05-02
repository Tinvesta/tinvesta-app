import { SectionWrapperLayout } from '../../atoms';
import { ISubscriptionPlansProps } from './subscription-plans.types';

export const SubscriptionPlans = ({ plans }: ISubscriptionPlansProps): JSX.Element => (
  <SectionWrapperLayout>{JSON.stringify(plans, null, 2)}</SectionWrapperLayout>
);
