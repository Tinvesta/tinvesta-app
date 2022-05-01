import { Done as DoneIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { CenterBlockLayout } from '@ui';

import { useTranslation } from '@utils';

import { translationStrings } from './house-rules-agreements-content.defaults';
import S from './house-rules-agreements-content.styles';

// TODO - select image based on theme
export const HouseRulesAgreementsContent = (): JSX.Element => {
  const translations = useTranslation(translationStrings);

  return (
    <CenterBlockLayout>
      <S.StyledWrapper>
        <S.StyledHeadingWrapper>
          <Image
            priority
            alt="Tinvesta"
            height={50}
            objectFit="scale-down"
            src="/images/brandmark-transparent-white.png"
            width={50}
          />
          <Typography fontWeight={900} variant="body1">
            {translations.componentHouseRulesAgreementsContentHeader}
          </Typography>
          <Typography variant="caption">
            {translations.componentHouseRulesAgreementsContentSubheader}
          </Typography>
        </S.StyledHeadingWrapper>
        <S.StyledHouseRuleWrapper>
          <Typography display="flex" flexDirection="row">
            <S.StyledHouseRuleIcon fontSize="small">
              <DoneIcon />
            </S.StyledHouseRuleIcon>
            <Typography variant="body1">
              {translations.componentHouseRulesAgreementsContentFirstRuleHeader}
            </Typography>
          </Typography>
          <Typography variant="caption">
            {translations.componentHouseRulesAgreementsContentFirstRuleDescription}
          </Typography>
        </S.StyledHouseRuleWrapper>
        <S.StyledHouseRuleWrapper>
          <Typography display="flex" flexDirection="row">
            <S.StyledHouseRuleIcon fontSize="small">
              <DoneIcon />
            </S.StyledHouseRuleIcon>
            <Typography variant="body1">
              {translations.componentHouseRulesAgreementsContentSecondRuleHeader}
            </Typography>
          </Typography>
          <Typography variant="caption">
            {translations.componentHouseRulesAgreementsContentSecondRuleDescription}
          </Typography>
        </S.StyledHouseRuleWrapper>
        <S.StyledHouseRuleWrapper>
          <Typography display="flex" flexDirection="row">
            <S.StyledHouseRuleIcon fontSize="small">
              <DoneIcon />
            </S.StyledHouseRuleIcon>
            <Typography variant="body1">
              {translations.componentHouseRulesAgreementsContentThirdRuleHeader}
            </Typography>
          </Typography>
          <Typography variant="caption">
            {translations.componentHouseRulesAgreementsContentThirdRuleDescription}
          </Typography>
        </S.StyledHouseRuleWrapper>
      </S.StyledWrapper>
    </CenterBlockLayout>
  );
};