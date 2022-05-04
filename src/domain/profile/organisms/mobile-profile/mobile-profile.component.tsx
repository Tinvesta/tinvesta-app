import { SubscriptionPlans } from '../../molecules';
import { IProfileProps } from '../../profile.types';
import S from './mobile-profile.styles';

export const MobileProfile = ({ plans }: IProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
  </S.StyledWrapper>
);
