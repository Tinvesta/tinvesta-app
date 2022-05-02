import { SubscriptionPlans } from '../../molecules';
import S from './mobile-profile.styles';
import { IMobileProfileProps } from './mobile-profile.types';

export const MobileProfile = ({ plans }: IMobileProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
  </S.StyledWrapper>
);
