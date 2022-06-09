import { HeaderAndFooterLayout } from '@ui';

import S from './privacy-policy.styles';

export const PrivacyPolicy = (): JSX.Element => (
  <HeaderAndFooterLayout openLoginModal={() => console.log('Privacy policy')}>
    <S.StyledWrapper>
      <S.StyledContentWrapper>Privacy policy</S.StyledContentWrapper>
    </S.StyledWrapper>
  </HeaderAndFooterLayout>
);
