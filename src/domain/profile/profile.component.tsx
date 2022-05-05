import { EditProfileForm, SubscriptionPlans } from './molecules';
import S from './profile.styles';
import { IProfileProps } from './profile.types';

export const Profile = ({ plans, ...restProps }: IProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
    <EditProfileForm {...restProps} />
  </S.StyledWrapper>
);
