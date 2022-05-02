import S from './section-wrapper.styles';
import { ISectionWrapperProps } from './section-wrapper.types';

export const SectionWrapperLayout = ({ children }: ISectionWrapperProps): JSX.Element => (
  <S.StyledWrapper>{children}</S.StyledWrapper>
);
