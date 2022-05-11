import S from './startup-details-preview.styles';
import { IStartupDetailsPreviewProps } from './startup-details-preview.types';

export const StartupDetailsPreview = ({
  profileDetails,
}: IStartupDetailsPreviewProps): JSX.Element => (
  <S.StyledWrapper>{JSON.stringify(profileDetails, null, 2)}</S.StyledWrapper>
);
