import { HeaderAndFooterLayout } from '@ui';

import S from './terms.styles';

export const Terms = (): JSX.Element => (
  <HeaderAndFooterLayout openLoginModal={() => console.log('Terms')}>
    <S.StyledWrapper>
      <S.StyledContentWrapper>Terms</S.StyledContentWrapper>
    </S.StyledWrapper>
  </HeaderAndFooterLayout>
);
